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

  const { name, email, subject, projectInterest, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "Missing required fields",
      required: ["name", "email", "subject", "message"],
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
    subject: sanitize(subject.trim()),
    projectInterest: projectInterest
      ? sanitize(projectInterest.trim())
      : "Not specified",
    message: sanitize(message.trim()),
  };

  try {
    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "contact@parkercase.co", // Must be your verified domain
      to: ["parker@parkercase.co"], // Your email
      subject: `🚀 New Contact: ${cleanData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6900, #006BB6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #006BB6; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #FF6900; }
            .footer { margin-top: 20px; padding: 15px; background: #006BB6; color: white; text-align: center; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <p>Someone is interested in your AI services!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${cleanData.name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${cleanData.email}">${cleanData.email}</a></div>
              </div>
              <div class="field">
                <div class="label">📋 Subject:</div>
                <div class="value">${cleanData.subject}</div>
              </div>
              <div class="field">
                <div class="label">🎯 Project Interest:</div>
                <div class="value">${cleanData.projectInterest}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${cleanData.message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>📅 Received: ${new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} EST</p>
              <p>🌐 From: parkercase.co</p>
            </div>
          </div>
        </body>
        </html>
      `,
      // Also send a plain text version
      text: `
New Contact Form Submission

Name: ${cleanData.name}
Email: ${cleanData.email}
Subject: ${cleanData.subject}
Project Interest: ${cleanData.projectInterest}

Message:
${cleanData.message}

Received: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST
From: parkercase.co
      `.trim(),
    });

    // Optional: Send auto-reply to the person who contacted you
    await resend.emails.send({
      from: "parker@parkercase.co",
      to: [cleanData.email],
      subject: `Thanks for reaching out! - Parker Case`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thanks for contacting Parker Case</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6900, #006BB6); color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .content { padding: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🤖 Thanks for reaching out!</h1>
            </div>
            <div class="content">
              <p>Hi ${cleanData.name},</p>
              <p>Thanks for your interest in my AI services! I've received your message about "${cleanData.subject}" and will get back to you within 24 hours.</p>
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>📅 <a href="https://calendly.com/parkere-case/30min">Schedule a consultation</a></li>
                <li>💼 <a href="https://parkercase.co">Check out my portfolio</a></li>
                <li>💡 <a href="https://www.linkedin.com/in/parker-c-582854106/">Connect on LinkedIn</a></li>
              </ul>
              <p>Looking forward to discussing your project!</p>
              <p>Best regards,<br>
              <strong>Parker Case</strong><br>
              AI Software Engineer<br>
              📧 parker@parkercase.co<br>
              📱 (929) 707-9902</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Log successful submission (for analytics)
    console.log("✅ Contact form submission successful:", {
      timestamp: new Date().toISOString(),
      name: cleanData.name,
      email: cleanData.email,
      subject: cleanData.subject,
      projectInterest: cleanData.projectInterest,
      emailId: emailData.data?.id,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      emailId: emailData.data?.id,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);

    return res.status(500).json({
      error: "Failed to send message",
      message:
        "There was an error processing your request. Please try again or contact parker@parkercase.co directly.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
