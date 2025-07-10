// pages/api/contact.js
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

  const { name, email, company, subject, projectInterest, message } = req.body;

  // Validation
  if (!name || !email || !company || !message) {
    return res.status(400).json({
      error: "Missing required fields",
      required: ["name", "email", "company", "message"],
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
    str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  const cleanData = {
    name: sanitize(name.trim()),
    email: sanitize(email.trim().toLowerCase()),
    company: sanitize(company.trim()),
    subject: subject ? sanitize(subject.trim()) : "New Business Inquiry",
    projectInterest: projectInterest
      ? sanitize(projectInterest.trim())
      : "Not specified",
    message: sanitize(message.trim()),
  };

  try {
    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "parker@parkercase.co",
      to: ["parker@parkercase.co"],
      subject: `🚀 New Enterprise Inquiry: ${cleanData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Enterprise Inquiry - StroomAI</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #ea580c); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #2563eb; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 8px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #ea580c; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .priority { background: #fef3c7; border-left-color: #f59e0b; }
            .footer { margin-top: 30px; padding: 20px; background: #1e293b; color: white; text-align: center; border-radius: 12px; font-size: 14px; }
            .cta { background: #2563eb; color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 10px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">StroomAI</div>
              <h1>🚀 New Enterprise Inquiry</h1>
              <p>A potential client is interested in our AI solutions!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Contact Person</div>
                <div class="value">${cleanData.name}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value priority"><strong>${
                  cleanData.company
                }</strong></div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${
                  cleanData.email
                }" style="color: #2563eb; text-decoration: none;">${
        cleanData.email
      }</a></div>
              </div>
              <div class="field">
                <div class="label">📋 Subject</div>
                <div class="value">${cleanData.subject}</div>
              </div>
              <div class="field">
                <div class="label">🎯 Solution Interest</div>
                <div class="value">${cleanData.projectInterest}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${cleanData.message.replace(
                  /\n/g,
                  "<br>"
                )}</div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${cleanData.email}" class="cta">📧 Reply to ${
        cleanData.name
      }</a>
                <a href="https://calendly.com/stroomai/consultation" class="cta">📅 Schedule Follow-up</a>
              </div>
            </div>
            <div class="footer">
              <p><strong>📅 Received:</strong> ${new Date().toLocaleString(
                "en-US",
                {
                  timeZone: "America/New_York",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )} EST</p>
              <p><strong>🌐 Source:</strong> StroomAI Website</p>
              <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                This inquiry was generated from the StroomAI enterprise contact form.<br>
                Follow up within 24 hours for optimal conversion rates.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      // Also send a plain text version
      text: `
New Enterprise Inquiry - StroomAI

Contact: ${cleanData.name}
Company: ${cleanData.company}
Email: ${cleanData.email}
Subject: ${cleanData.subject}
Solution Interest: ${cleanData.projectInterest}

Message:
${cleanData.message}

Received: ${new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
      })} EST
Source: StroomAI Website
      `.trim(),
    });

    // Send auto-reply to the potential client
    await resend.emails.send({
      from: "parker@parkercase.co",
      to: [cleanData.email],
      subject: `Thank you for your interest in StroomAI - Enterprise Solutions`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting StroomAI</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #ea580c); color: white; padding: 30px; border-radius: 12px; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .content { padding: 30px 20px; }
            .cta-button { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; margin: 15px 10px; font-weight: 600; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }
            .feature { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ea580c; }
            .stats { text-align: center; margin: 30px 0; }
            .stat { display: inline-block; margin: 0 20px; text-align: center; }
            .stat-number { font-size: 24px; font-weight: bold; color: #2563eb; }
            .stat-label { font-size: 14px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">StroomAI</div>
              <h1>🤖 Thank You for Your Interest!</h1>
              <p>Enterprise AI Solutions That Drive Results</p>
            </div>
            <div class="content">
              <p>Dear ${cleanData.name},</p>
              
              <p>Thank you for reaching out to <strong>StroomAI</strong> regarding AI solutions for <strong>${cleanData.company}</strong>. We're excited about the opportunity to help transform your business with intelligent automation.</p>
              
              <div class="stats">
                <div class="stat">
                  <div class="stat-number">99.7%</div>
                  <div class="stat-label">Uptime</div>
                </div>
                <div class="stat">
                  <div class="stat-number">40%</div>
                  <div class="stat-label">Efficiency Gain</div>
                </div>
                <div class="stat">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">AI Availability</div>
                </div>
              </div>

              <div class="feature">
                <h3>🚀 What Happens Next?</h3>
                <p>Our team will review your inquiry and contact you within <strong>24 hours</strong> to discuss:</p>
                <ul>
                  <li>Your specific AI requirements and goals</li>
                  <li>Custom solution recommendations</li>
                  <li>Implementation timeline and investment</li>
                  <li>ROI projections and success metrics</li>
                </ul>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://calendly.com/stroomai/consultation" class="cta-button">📅 Schedule Immediate Consultation</a>
                <br>
                <small style="color: #6b7280;">Or we'll contact you within 24 hours</small>
              </div>

              <div class="feature">
                <h3>🏆 Why Leading Enterprises Choose StroomAI</h3>
                <ul>
                  <li><strong>Patent-Pending Technology:</strong> Cutting-edge innovations that give you competitive advantage</li>
                  <li><strong>Rapid Deployment:</strong> From concept to production in 2-12 weeks</li>
                  <li><strong>Enterprise Security:</strong> Privacy-first design with enterprise-grade compliance</li>
                  <li><strong>Proven ROI:</strong> Average 40% efficiency improvement within 3-6 months</li>
                </ul>
              </div>

              <p>We're looking forward to partnering with ${cleanData.company} to build intelligent solutions that drive measurable business value.</p>
              
              <p>Best regards,<br>
              <strong>The StroomAI Team</strong><br>
              Enterprise AI Solutions<br>
              📧 info@stroomai.com<br>
              📱 +1 (929) 707-9902<br>
              🌐 <a href="https://stroomai.com" style="color: #2563eb;">stroomai.com</a></p>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 12px; color: #6b7280; text-align: center;">
                This email was sent in response to your inquiry on our website.<br>
                StroomAI - Building Intelligent Solutions for Enterprise
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Log successful submission (for analytics)
    console.log("✅ Enterprise inquiry submitted successfully:", {
      timestamp: new Date().toISOString(),
      name: cleanData.name,
      email: cleanData.email,
      company: cleanData.company,
      subject: cleanData.subject,
      projectInterest: cleanData.projectInterest,
      emailId: emailData.data?.id,
    });

    return res.status(200).json({
      success: true,
      message:
        "Thank you for your inquiry! Our team will contact you within 24 hours.",
      emailId: emailData.data?.id,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);

    return res.status(500).json({
      error: "Failed to send message",
      message:
        "There was an error processing your request. Please try again or contact info@stroomai.com directly.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
