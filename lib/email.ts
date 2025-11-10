import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting - simple in-memory cache (use Redis in production)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_EMAILS_PER_WINDOW = 10;

interface ProjectData {
  name: string;
  email: string;
  company?: string;
  projectDescription: string;
  timeline: string;
  stage: string;
  budgetRange: string;
  dataAvailability: string;
  engagementModel: string;
  expectedDeliverables: string;
}

interface ClaudeAnalysis {
  complexityScore: number;
  estimatedHours: number;
  hourRange: { min: number; max: number };
  recommendedRate: number;
  recommendedEngagementModel?: string;
  totalEstimate: { min: number; max: number };
  riskFactors: string[];
  questions: string[];
  suitability: string;
  autoApprove: boolean;
  reasoning: string;
}

// Rate limiting helper
function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const cached = rateLimitCache.get(key);

  if (!cached || now > cached.resetTime) {
    rateLimitCache.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (cached.count >= MAX_EMAILS_PER_WINDOW) {
    return false;
  }

  cached.count++;
  return true;
}

// HTML sanitization helper
function sanitizeHtml(text: string): string {
  const div = typeof document !== 'undefined' 
    ? document.createElement('div') 
    : { textContent: text } as any;
  if (div.textContent !== undefined) {
    div.textContent = text;
    return div.innerHTML;
  }
  // Fallback for server-side
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Send approval email to info@stroomai.com with project details and Claude analysis
 */
export async function sendApprovalEmail(
  data: ProjectData,
  analysis: ClaudeAnalysis
): Promise<{ success: boolean; error?: string }> {
  // Rate limiting
  if (!checkRateLimit('approval-email')) {
    console.warn('Rate limit exceeded for approval emails');
    return { success: false, error: 'Rate limit exceeded' };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  const engagementLabels: Record<string, string> = {
    'hourly': 'Hourly Only',
    'commission-hourly': 'Commission + Hourly',
    'equity-commission': 'Equity + Commission',
  };

  const approveSubject = encodeURIComponent(`Approve: ${data.name} - ${data.company || 'No Company'}`);
  const approveBody = encodeURIComponent(`Hi ${data.name},\n\nI'd like to move forward with your project. Let's schedule a call to discuss next steps.\n\nBest,\nParker`);
  
  const rejectSubject = encodeURIComponent(`Regarding: ${data.name} - ${data.company || 'No Company'}`);
  const rejectBody = encodeURIComponent(`Hi ${data.name},\n\nThank you for your interest. Unfortunately, I'm not able to take on this project at this time.\n\nBest,\nParker`);

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Project Brief</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0;">
        <div style="background: linear-gradient(135deg, #e5734d 0%, #d85a3a 100%); padding: 2rem; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 1.5rem; font-weight: 600;">New Project Brief</h1>
          <p style="color: #ffffff; margin: 0.5rem 0 0 0; opacity: 0.9;">${analysis.autoApprove ? '✓ Auto-Approve' : '⚠ Needs Review'}</p>
        </div>

        <div style="padding: 2rem;">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
            <div style="flex: 1; text-align: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
              <div style="font-size: 2rem; font-weight: 700; color: #e5734d; margin-bottom: 0.25rem;">
                ${analysis.complexityScore}
              </div>
              <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Complexity Score</div>
            </div>
            <div style="flex: 1; text-align: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
              <div style="font-size: 1.5rem; font-weight: 700; color: #e5734d; margin-bottom: 0.25rem;">
                ${formatCurrency(analysis.totalEstimate.min)} - ${formatCurrency(analysis.totalEstimate.max)}
              </div>
              <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Total Estimate</div>
            </div>
            <div style="flex: 1; text-align: center; padding: 1rem; background-color: #f8f9fa; border-radius: 8px;">
              <div style="font-size: 1.25rem; font-weight: 700; color: #e5734d; margin-bottom: 0.25rem;">
                ${analysis.estimatedHours}h
              </div>
              <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Estimated Hours</div>
            </div>
          </div>

          ${analysis.recommendedEngagementModel ? `
            <div style="background-color: #fff3e0; border-left: 4px solid #e5734d; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
              <div style="font-size: 0.875rem; font-weight: 600; color: #e5734d; margin-bottom: 0.25rem;">Claude Recommended Engagement</div>
              <div style="font-size: 1rem; color: #2c3e50; font-weight: 500;">
                ${engagementLabels[analysis.recommendedEngagementModel] || analysis.recommendedEngagementModel}
              </div>
            </div>
          ` : ''}

          <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: #2c3e50;">Client Information</h3>
            <div style="display: grid; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Name</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.name)}</div>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Email</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">
                  <a href="mailto:${sanitizeHtml(data.email)}" style="color: #e5734d; text-decoration: none;">${sanitizeHtml(data.email)}</a>
                </div>
              </div>
              ${data.company ? `
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                  <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Company</div>
                  <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.company)}</div>
                </div>
              ` : ''}
            </div>
          </div>

          <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: #2c3e50;">Project Details</h3>
            <div style="display: grid; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Stage</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.stage)}</div>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Timeline</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.timeline)}</div>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Engagement Model</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(engagementLabels[data.engagementModel] || data.engagementModel)}</div>
              </div>
              ${analysis.recommendedEngagementModel ? `
                <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                  <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Claude Recommended</div>
                  <div style="font-size: 0.875rem; color: #e5734d; font-weight: 500; text-align: right;">
                    ${engagementLabels[analysis.recommendedEngagementModel] || analysis.recommendedEngagementModel}
                  </div>
                </div>
              ` : ''}
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Budget Range</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.budgetRange)}</div>
        </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Complexity (Claude Determined)</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">
                  ${analysis.complexityScore <= 3 ? 'Simple' : analysis.complexityScore <= 6 ? 'Medium' : 'Complex'} 
                  (Score: ${analysis.complexityScore}/10)
                </div>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Data Availability</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${sanitizeHtml(data.dataAvailability)}</div>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Expected Deliverables</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right; white-space: pre-wrap;">${sanitizeHtml(data.expectedDeliverables)}</div>
        </div>
            </div>
          </div>

          <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: #2c3e50;">Project Description</h3>
            <p style="margin: 0; font-size: 0.875rem; color: #2c3e50; line-height: 1.6; white-space: pre-wrap;">${sanitizeHtml(data.projectDescription)}</p>
          </div>

          ${analysis.reasoning ? `
            <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600; color: #2e7d32;">Claude's Analysis</h4>
              <p style="margin: 0; font-size: 0.875rem; color: #1b5e20; line-height: 1.6;">${sanitizeHtml(analysis.reasoning)}</p>
            </div>
          ` : ''}

          ${analysis.riskFactors && analysis.riskFactors.length > 0 ? `
            <div style="background-color: #fff3e0; border-left: 4px solid #ff9800; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600; color: #e65100;">Risk Factors</h4>
              <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: #e65100; line-height: 1.6;">
                ${analysis.riskFactors.map(risk => `<li>${sanitizeHtml(risk)}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${analysis.questions && analysis.questions.length > 0 ? `
            <div style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;">
              <h4 style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 600; color: #1565c0;">Clarifying Questions</h4>
              <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: #1565c0; line-height: 1.6;">
                ${analysis.questions.map(question => `<li>${sanitizeHtml(question)}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: #2c3e50;">Estimated Breakdown</h3>
            <div style="display: grid; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Hourly Rate</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${formatCurrency(analysis.recommendedRate)}/hr</div>
              </div>
              <div style="display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #dee2e6;">
                <div style="font-size: 0.875rem; color: #6c757d; font-weight: 500;">Hours Range</div>
                <div style="font-size: 0.875rem; color: #2c3e50; font-weight: 500; text-align: right;">${analysis.hourRange.min} - ${analysis.hourRange.max} hours</div>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <div style="font-size: 1rem; color: #2c3e50; font-weight: 600;">Total Estimate</div>
                <div style="font-size: 1rem; color: #e5734d; font-weight: 700; text-align: right;">${formatCurrency(analysis.totalEstimate.min)} - ${formatCurrency(analysis.totalEstimate.max)}</div>
              </div>
            </div>
          </div>

      <div class="actions">
            <a href="mailto:${data.email}?subject=${approveSubject}&body=${approveBody}" class="btn btn-approve">Approve & Send Proposal</a>
            <a href="mailto:${data.email}?subject=${rejectSubject}&body=${rejectBody}" class="btn btn-reject">Decline</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'StroomAI <proposals@stroomai.com>',
      to: 'info@stroomai.com',
      reply_to: data.email,
      subject: `New Project Brief: ${data.name} - ${analysis.autoApprove ? '✓ Auto-Approve' : '⚠ Needs Review'}`,
      html,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return { success: false, error: result.error.message || 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send approval email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Send confirmation email to client
 */
export async function sendClientConfirmation(
  data: ProjectData
): Promise<{ success: boolean; error?: string }> {
  // Rate limiting
  if (!checkRateLimit(`client-${data.email}`)) {
    console.warn(`Rate limit exceeded for client email: ${data.email}`);
    return { success: false, error: 'Rate limit exceeded' };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Project Brief Received</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0;">
        <div style="background: linear-gradient(135deg, #e5734d 0%, #d85a3a 100%); padding: 2rem; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 1.5rem; font-weight: 600;">Thank You!</h1>
        </div>

        <div style="padding: 2rem;">
          <p style="margin: 0 0 1rem 0; font-size: 1rem; color: #2c3e50; line-height: 1.6;">
            Hi ${sanitizeHtml(data.name)},
          </p>

          <p>
            I&apos;ve received your project brief and will review it within the next 48 hours.
          </p>

          <div class="timeline-box">
            <div class="timeline-title">What to Expect</div>
            <ul class="timeline-list">
              <li class="timeline-item">
                <strong>Detailed Proposal</strong> - Comprehensive breakdown of scope, timeline, and pricing
              </li>
              <li class="timeline-item">
                <strong>Clarifying Questions</strong> - Any questions I have about your requirements
              </li>
              <li class="timeline-item">
                <strong>Next Steps</strong> - Clear path forward if we decide to work together
              </li>
        </ul>
      </div>

          <p style="margin: 1.5rem 0 0 0; font-size: 1rem; color: #2c3e50; line-height: 1.6;">
            I&apos;ll be in touch soon!
          </p>

          <p style="margin: 1.5rem 0 0 0; font-size: 0.875rem; color: #6c757d; line-height: 1.6;">
            Best regards,<br>
            <strong style="color: #e5734d;">Parker</strong><br>
            StroomAI
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'Parker at StroomAI <parker@stroomai.com>',
      to: data.email,
      reply_to: 'info@stroomai.com',
      subject: 'Project Brief Received - StroomAI',
      html,
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return { success: false, error: result.error.message || 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send client confirmation:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
