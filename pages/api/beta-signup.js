// pages/api/beta-signup.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
      message: "This endpoint only accepts POST requests",
    });
  }

  // CORS headers for cross-origin requests
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { name, email, company, selectedPlatforms, healthCondition, notes } = req.body;

  // Validation
  if (!name || !email || !selectedPlatforms || selectedPlatforms.length === 0) {
    return res.status(400).json({
      error: "Missing required fields",
      required: ["name", "email", "selectedPlatforms (at least one)"],
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Invalid email format",
    });
  }

  // Sanitize inputs to prevent XSS
  const sanitize = (str) =>
    str ? str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim() : "";

  const cleanData = {
    name: sanitize(name),
    email: sanitize(email.toLowerCase()),
    company: sanitize(company),
    selectedPlatforms: selectedPlatforms.filter(p => p && p.trim()),
    healthCondition: sanitize(healthCondition),
    notes: sanitize(notes),
  };

  // Platform information (no pricing)
  const platformInfo = {
    "MeridianAI": { description: "Enterprise Intelligence Platform" },
    "MuseAI": { description: "Film Production Intelligence" },
    "HygeiaAI": { description: "Medical Nutrition Therapy" },
    "ModeAI": { description: "AI Personal Stylist" },
    "TraffickJam": { description: "Wildlife Crime Monitoring" },
    "ADM": { description: "Mental Health Platform" }
  };

  try {
    // Send notification email to sales
    const emailData = await resend.emails.send({
      from: "sales@stroomai.com",
      to: ["sales@stroomai.com"],
      subject: `🚀 New Beta Request: ${cleanData.selectedPlatforms.join(', ')} - ${cleanData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Beta Signup - StroomAI</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #2563eb; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 8px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #7c3aed; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .priority { background: #fef3c7; border-left-color: #f59e0b; }
            .platforms { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
            .platform-tag { background: #7c3aed; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; }
            .footer { margin-top: 30px; padding: 20px; background: #1e293b; color: white; text-align: center; border-radius: 12px; font-size: 14px; }
            .cta { background: #2563eb; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 10px; font-weight: 600; }
            .revenue-highlight { background: #dcfce7; border-left-color: #16a34a; color: #15803d; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">StroomAI</div>
              <h1>🚀 New Beta Request!</h1>
              <p>Someone wants early access to our AI platforms!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Beta User</div>
                <div class="value priority"><strong>${cleanData.name}</strong></div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${cleanData.email}" style="color: #2563eb; text-decoration: none;">${cleanData.email}</a></div>
              </div>
              ${cleanData.company ? `
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${cleanData.company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">🎯 Selected Platforms</div>
                <div class="value">
                  <div class="platforms">
                    ${cleanData.selectedPlatforms.map(platform => `<span class="platform-tag">${platform}</span>`).join('')}
                  </div>
                  <div style="margin-top: 15px;">
                    ${cleanData.selectedPlatforms.map(platform => {
                      const info = platformInfo[platform];
                      return info ? `<div style="margin: 5px 0;"><strong>${platform}:</strong> ${info.description}</div>` : '';
                    }).join('')}
                  </div>
                </div>
              </div>
              ${cleanData.healthCondition ? `
              <div class="field">
                <div class="label">🏥 Health Condition (for HygeiaAI)</div>
                <div class="value">${cleanData.healthCondition}</div>
              </div>
              ` : ''}
              ${cleanData.notes ? `
              <div class="field">
                <div class="label">💬 Additional Notes</div>
                <div class="value">${cleanData.notes.replace(/\n/g, "<br>")}</div>
              </div>
              ` : ''}
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${cleanData.email}" class="cta">📧 Contact ${cleanData.name}</a>
                <a href="https://calendly.com/parkere-case/30min" class="cta">📅 Schedule Demo</a>
              </div>
            </div>
            <div class="footer">
              <p><strong>📅 Signed up:</strong> ${new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} EST</p>
              <p><strong>🌐 Source:</strong> StroomAI Beta Signup Form</p>
              <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                Beta access launching September 2024 - Follow up within 48 hours for optimal response!
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Beta Request - StroomAI

Name: ${cleanData.name}
Email: ${cleanData.email}
Company: ${cleanData.company || 'Not provided'}
Selected Platforms: ${cleanData.selectedPlatforms.join(', ')}
Health Condition: ${cleanData.healthCondition || 'Not provided'}
Notes: ${cleanData.notes || 'None'}

Platform Descriptions:
${cleanData.selectedPlatforms.map(platform => {
  const info = platformInfo[platform];
  return info ? `${platform}: ${info.description}` : platform;
}).join('\n')}

Requested: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
Source: StroomAI Beta Request Form
      `.trim(),
    });

    // Send confirmation email to the beta user
    await resend.emails.send({
      from: "sales@stroomai.com",
      to: [cleanData.email],
      subject: `🎉 Beta Request Received - StroomAI Team Will Contact You Soon!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Beta Request Received - StroomAI</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 30px; border-radius: 12px; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .content { padding: 30px 20px; }
            .platform-card { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #7c3aed; }
            .platform-title { font-weight: 600; color: #2563eb; font-size: 16px; margin-bottom: 5px; }
            .cta-button { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 15px 10px; font-weight: 600; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3); }
            .timeline { background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">StroomAI</div>
              <h1>🎉 Beta Request Received!</h1>
              <p>Thank you for your interest in our AI platforms</p>
            </div>
            <div class="content">
              <p>Hi ${cleanData.name},</p>
              
              <p>🚀 <strong>Thank you for your beta request!</strong> We received your interest in the following StroomAI platforms:</p>
              
              ${cleanData.selectedPlatforms.map(platform => {
                const info = platformInfo[platform];
                return info ? `
                <div class="platform-card">
                  <div class="platform-title">${platform}</div>
                  <p>${info.description}</p>
                </div>
                ` : '';
              }).join('')}

              <div class="timeline">
                <h3>📞 Next Steps</h3>
                <p><strong>Within 48 hours:</strong> Our team will reach out to discuss your specific needs, pricing, and implementation timeline</p>
                <p><strong>September 2024:</strong> Beta access begins for selected participants</p>
                <p><strong>Personalized Demo:</strong> Optional - Schedule a call to see the platforms in action</p>
              </div>

              <h3>🎯 What to expect in our call:</h3>
              <ul>
                <li><strong>Needs Assessment:</strong> Understanding your specific use cases and requirements</li>
                <li><strong>Custom Pricing:</strong> Tailored pricing based on your company size and needs</li>
                <li><strong>Implementation Plan:</strong> Timeline and technical requirements discussion</li>
                <li><strong>Beta Access:</strong> Securing your spot in our September launch</li>
              </ul>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://calendly.com/parkere-case/30min" class="cta-button">📅 Schedule Call Now (Optional)</a>
                <br>
                <small style="color: #6b7280;">Or wait for our team to contact you within 48 hours</small>
              </div>

              <p>We're excited to discuss how our breakthrough AI innovations can transform your business operations!</p>
              
              <p>Best regards,<br>
              <strong>The StroomAI Team</strong><br>
              Enterprise AI Solutions<br>
              <a href="mailto:sales@stroomai.com" style="color: #2563eb; text-decoration: none;">sales@stroomai.com</a><br>
              <a href="tel:+19297079902" style="color: #2563eb; text-decoration: none;">+1 (929) 707-9902</a></p>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 12px; color: #6b7280; text-align: center;">
                You requested beta access to: ${cleanData.selectedPlatforms.join(', ')}<br>
                Our team will contact you within 48 hours to discuss next steps.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Log successful submission
    console.log("✅ Beta signup submitted successfully:", {
      timestamp: new Date().toISOString(),
      name: cleanData.name,
      email: cleanData.email,
      platforms: cleanData.selectedPlatforms,
      emailId: emailData.data?.id,
    });

    return res.status(200).json({
      success: true,
      message: "🎉 Beta request submitted! Our team will contact you within 48 hours.",
      emailId: emailData.data?.id,
      selectedPlatforms: cleanData.selectedPlatforms,
    });
  } catch (error) {
    console.error("❌ Error sending beta signup email:", error);

    return res.status(500).json({
      error: "Failed to process beta signup",
      message: 'There was an error processing your signup. Please try again or contact <a href="mailto:sales@stroomai.com" style="color: #2563eb; text-decoration: none;">sales@stroomai.com</a> directly.',
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
