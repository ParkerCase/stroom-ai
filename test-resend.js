// test-resend.js - Test Resend API configuration
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  try {
    console.log("Testing Resend API configuration...");
    console.log("API Key:", process.env.RESEND_API_KEY ? "Present" : "Missing");

    // Test sending a simple email
    const result = await resend.emails.send({
      from: "info@stroomai.com",
      to: ["info@stroomai.com"],
      subject: "Test Email from StroomAI Contact Form",
      html: "<p>This is a test email to verify Resend configuration.</p>",
    });

    console.log("✅ Email sent successfully!");
    console.log("Email ID:", result.data?.id);
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error("Error message:", error.message);
    console.error("Error code:", error.statusCode);
    console.error("Full error:", error);
  }
}

testResend();
