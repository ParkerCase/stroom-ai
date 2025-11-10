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

/**
 * Check rate limiting for email sending
 */
function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitCache.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitCache.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_EMAILS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

/**
 * Sanitize HTML to prevent XSS
 */
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Format currency
 */
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

  const engagementLabels: Record<string, string> = {
    'hourly': 'Hourly Only',
    'commission-hourly': 'Commission + Hourly',
    'equity-commission': 'Equity + Commission',
  };

  const stageLabels: Record<string, string> = {
    'idea': 'Idea / Concept',
    'prototype': 'Prototype / MVP',
    'production': 'Production / Scaling',
    'research': 'Research / Exploration',
  };

  const timelineLabels: Record<string, string> = {
    'urgent': 'Urgent (1-2 weeks)',
    'short': 'Short (1-2 months)',
    'medium': 'Medium (3-6 months)',
    'long': 'Long-term (6+ months)',
  };

  // Create approve/reject mailto links
  const approveSubject = encodeURIComponent(`Re: Project Brief - Approved - ${data.name}`);
  const approveBody = encodeURIComponent(
    `Hi ${data.name},\n\n` +
    `Thank you for your project brief. I'd be happy to work with you on this.\n\n` +
    `Proposed Scope:\n` +
    `- Estimated hours: ${analysis.estimatedHours} (${analysis.hourRange.min}-${analysis.hourRange.max} range)\n` +
    `- Rate: ${formatCurrency(analysis.recommendedRate)}/hour\n` +
    `- Total estimate: ${formatCurrency(analysis.totalEstimate.min)} - ${formatCurrency(analysis.totalEstimate.max)}\n` +
    `- Engagement model: ${engagementLabels[data.engagementModel] || data.engagementModel}\n\n` +
    `Let's schedule a call to discuss details and finalize the proposal.\n\n` +
    `Best,\nParker\nStroomAI`
  );

  const rejectSubject = encodeURIComponent(`Re: Project Brief - Not a Fit`);
  const rejectBody = encodeURIComponent(
    `Hi ${data.name},\n\n` +
    `Thank you for reaching out with your project brief. After careful review, I don't think this project is the right fit for my current focus areas.\n\n` +
    `I wish you the best with your project and hope we can work together in the future.\n\n` +
    `Best,\nParker\nStroomAI`
  );

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: #2f2a28;
          background-color: #fdf8f3;
          padding: 0;
          margin: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          padding: 2.5rem 2rem 2rem;
          border-bottom: 1px solid rgba(47, 42, 40, 0.1);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2f2a28;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .header-meta {
          font-size: 0.75rem;
          color: rgba(47, 42, 40, 0.65);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .content {
          padding: 2rem;
        }
        .section {
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: rgba(47, 42, 40, 0.65);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .section-title::before {
          content: '';
          display: block;
          width: 52px;
          height: 1px;
          background: rgba(47, 42, 40, 0.1);
        }
        .detail-row {
          margin-bottom: 1.25rem;
        }
        .detail-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(47, 42, 40, 0.65);
          margin-bottom: 0.25rem;
        }
        .detail-value {
          font-size: 0.95rem;
          color: #2f2a28;
          line-height: 1.6;
        }
        .detail-value a {
          color: #d85a3a;
          text-decoration: none;
        }
        .detail-value a:hover {
          text-decoration: underline;
        }
        .analysis-box {
          background: rgba(229, 115, 77, 0.05);
          border: 1px solid rgba(229, 115, 77, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .analysis-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        .complexity-score {
          font-size: 3rem;
          font-weight: 800;
          color: #d85a3a;
          line-height: 1;
        }
        .score-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: rgba(47, 42, 40, 0.65);
          margin-top: 0.5rem;
        }
        .status-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .status-auto {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        .status-review {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        .estimate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .estimate-item {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
        }
        .estimate-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: rgba(47, 42, 40, 0.65);
          margin-bottom: 0.5rem;
        }
        .estimate-value {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2f2a28;
        }
        .reasoning {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 1rem;
          margin-top: 1rem;
          font-size: 0.9rem;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .list {
          list-style: none;
          padding: 0;
        }
        .list-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(47, 42, 40, 0.1);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .list-item:last-child {
          border-bottom: none;
        }
        .list-item::before {
          content: '•';
          color: #d85a3a;
          font-weight: bold;
          margin-right: 0.75rem;
        }
        .actions {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(47, 42, 40, 0.1);
          text-align: center;
        }
        .btn {
          display: inline-block;
          padding: 0.875rem 2rem;
          margin: 0 0.5rem;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }
        .btn-approve {
          background: #d85a3a;
          color: #ffffff;
          border: 1px solid #d85a3a;
        }
        .btn-approve:hover {
          background: #c54a2a;
          border-color: #c54a2a;
        }
        .btn-reject {
          background: transparent;
          color: #2f2a28;
          border: 1px solid rgba(47, 42, 40, 0.18);
        }
        .btn-reject:hover {
          background: rgba(47, 42, 40, 0.05);
        }
        .project-description {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 8px;
          padding: 1rem;
          white-space: pre-wrap;
          font-size: 0.9rem;
          line-height: 1.7;
        }
        @media (max-width: 600px) {
          .email-container {
            width: 100%;
          }
          .content {
            padding: 1.5rem;
          }
          .estimate-grid {
            grid-template-columns: 1fr;
          }
          .btn {
            display: block;
            margin: 0.5rem 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
      <div class="header">
          <div class="logo">StroomAI</div>
          <div class="header-meta">New Project Brief • ${new Date().toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
            year: 'numeric'
          })}</div>
      </div>

        <div class="content">
      <div class="section">
            <div class="section-title">Client Information</div>
            <div class="detail-row">
              <div class="detail-label">Name</div>
              <div class="detail-value">${sanitizeHtml(data.name)}</div>
        </div>
            <div class="detail-row">
              <div class="detail-label">Email</div>
              <div class="detail-value"><a href="mailto:${data.email}">${sanitizeHtml(data.email)}</a></div>
        </div>
        ${data.company ? `
            <div class="detail-row">
              <div class="detail-label">Company</div>
              <div class="detail-value">${sanitizeHtml(data.company)}</div>
        </div>
        ` : ''}
      </div>

      <div class="section">
            <div class="section-title">Project Description</div>
            <div class="project-description">${sanitizeHtml(data.projectDescription)}</div>
      </div>

      <div class="analysis-box">
            <div class="analysis-header">
          <div>
                <div class="complexity-score">${analysis.complexityScore}</div>
            <div class="score-label">Complexity Score</div>
          </div>
          <div>
                <span class="status-badge ${analysis.autoApprove ? 'status-auto' : 'status-review'}">
                  ${analysis.autoApprove ? '✓ Auto-Approve' : '⚠ Needs Review'}
                </span>
          </div>
        </div>

            <div class="estimate-grid">
          <div class="estimate-item">
                <div class="estimate-label">Hours</div>
                <div class="estimate-value">${analysis.estimatedHours}</div>
          </div>
          <div class="estimate-item">
                <div class="estimate-label">Rate</div>
                <div class="estimate-value">${formatCurrency(analysis.recommendedRate)}/hr</div>
          </div>
          <div class="estimate-item">
                <div class="estimate-label">Total</div>
                <div class="estimate-value">${formatCurrency(analysis.totalEstimate.min)} - ${formatCurrency(analysis.totalEstimate.max)}</div>
          </div>
        </div>

            <div class="detail-row">
              <div class="detail-label">Suitability</div>
              <div class="detail-value" style="text-transform: capitalize;">${sanitizeHtml(analysis.suitability)}</div>
        </div>

            <div class="reasoning">${sanitizeHtml(analysis.reasoning)}</div>
      </div>

      ${analysis.riskFactors.length > 0 ? `
      <div class="section">
            <div class="section-title">Risk Factors</div>
            <ul class="list">
              ${analysis.riskFactors.map(risk => `<li class="list-item">${sanitizeHtml(risk)}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      ${analysis.questions.length > 0 ? `
      <div class="section">
            <div class="section-title">Questions to Ask</div>
            <ul class="list">
              ${analysis.questions.map(q => `<li class="list-item">${sanitizeHtml(q)}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      <div class="section">
            <div class="section-title">Project Details</div>
            <div class="detail-row">
              <div class="detail-label">Stage</div>
              <div class="detail-value">${sanitizeHtml(stageLabels[data.stage] || data.stage)}</div>
        </div>
            <div class="detail-row">
              <div class="detail-label">Timeline</div>
              <div class="detail-value">${sanitizeHtml(timelineLabels[data.timeline] || data.timeline)}</div>
        </div>
            <div class="detail-row">
              <div class="detail-label">Client Preferred Engagement</div>
              <div class="detail-value">${sanitizeHtml(engagementLabels[data.engagementModel] || data.engagementModel)}</div>
            </div>
            ${analysis.recommendedEngagementModel ? `
            <div class="detail-row">
              <div class="detail-label">Claude Recommended Engagement</div>
              <div class="detail-value" style="color: var(--accent-clay); font-weight: 500;">
                ${sanitizeHtml(engagementLabels[analysis.recommendedEngagementModel] || analysis.recommendedEngagementModel)}
              </div>
            </div>
            ` : ''}
            <div class="detail-row">
              <div class="detail-label">Budget Range</div>
              <div class="detail-value">${sanitizeHtml(data.budgetRange)}</div>
        </div>
            <div class="detail-row">
              <div class="detail-label">Complexity (Claude Determined)</div>
              <div class="detail-value">
                ${analysis.complexityScore <= 3 ? 'Simple' : analysis.complexityScore <= 6 ? 'Medium' : 'Complex'} 
                (Score: ${analysis.complexityScore}/10)
              </div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Data Availability</div>
              <div class="detail-value">${sanitizeHtml(data.dataAvailability)}</div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Expected Deliverables</div>
              <div class="detail-value" style="white-space: pre-wrap;">${sanitizeHtml(data.expectedDeliverables)}</div>
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
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

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

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: #2f2a28;
          background-color: #fdf8f3;
          padding: 0;
          margin: 0;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          padding: 3rem 2rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(47, 42, 40, 0.1);
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2f2a28;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .content {
          padding: 2.5rem 2rem;
        }
        h1 {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 500;
          color: #2f2a28;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        p {
          font-size: 0.95rem;
          color: rgba(47, 42, 40, 0.65);
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        .timeline-box {
          background: rgba(229, 115, 77, 0.05);
          border: 1px solid rgba(229, 115, 77, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .timeline-title {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: rgba(47, 42, 40, 0.65);
          margin-bottom: 1rem;
        }
        .timeline-list {
          list-style: none;
          padding: 0;
        }
        .timeline-item {
          padding: 0.75rem 0;
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(47, 42, 40, 0.65);
        }
        .timeline-item strong {
          color: #2f2a28;
          font-weight: 500;
        }
        .timeline-item::before {
          content: '•';
          color: #d85a3a;
          font-weight: bold;
          margin-right: 0.75rem;
        }
        .signature {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(47, 42, 40, 0.1);
        }
        .signature p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }
        .signature-name {
          font-weight: 600;
          color: #2f2a28;
        }
        .signature-title {
          color: rgba(47, 42, 40, 0.65);
        }
        .signature-link {
          color: #d85a3a;
          text-decoration: none;
        }
        .signature-link:hover {
          text-decoration: underline;
        }
        .footer {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(47, 42, 40, 0.1);
          text-align: center;
          font-size: 0.75rem;
          color: rgba(47, 42, 40, 0.5);
        }
        @media (max-width: 600px) {
          .email-container {
            width: 100%;
          }
          .content {
            padding: 1.5rem;
          }
          .header {
            padding: 2rem 1.5rem 1.5rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
      <div class="header">
          <div class="logo">StroomAI</div>
      </div>

        <div class="content">
          <h1>Thank You, ${sanitizeHtml(data.name)}</h1>

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

      <p>
        In the meantime, feel free to reply to this email if you have any additional information or questions.
      </p>

      <div class="signature">
            <p class="signature-name">Parker</p>
            <p class="signature-title">Founder, StroomAI</p>
            <p>
              <a href="https://stroomai.com" class="signature-link">stroomai.com</a>
            </p>
      </div>

      <div class="footer">
        <p>StroomAI - Biochemical Interaction Modeling</p>
        <p>New York, NY</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return { success: false, error: 'Email service not configured' };
    }

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

