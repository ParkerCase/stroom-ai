// pages/api/instacart/referral.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userId, campaignName, customParams } = req.body;

    // Get API key from environment variables
    const apiKey = process.env.INSTACART_API_KEY;

    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "Instacart API key not configured" });
    }

    // Generate unique referral ID
    const referralId = `stroom_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Create referral link with official Instacart affiliate tracking parameters
    const baseUrl = "https://www.instacart.com";

    // Get partner ID from environment (you'll need to set this)
    const partnerId = process.env.INSTACART_PARTNER_ID || "YOUR_PARTNER_ID";

    const trackingParams = new URLSearchParams({
      // Official Instacart affiliate tracking parameters
      utm_campaign: "instacart-idp",
      utm_medium: "affiliate",
      utm_source: "instacart_idp",
      utm_term: "partnertype-mediapartner",
      utm_content: `campaignid-20313_partnerid-${partnerId}`,
      // Additional tracking for your system
      stroom_ref: referralId,
      stroom_campaign: campaignName || "default",
      stroom_user: userId || "anonymous",
      ...customParams,
    });

    const referralLink = `${baseUrl}?${trackingParams.toString()}`;

    // Store referral data (you might want to save this to a database)
    const referralData = {
      referralId,
      userId: userId || "anonymous",
      campaignName: campaignName || "default",
      createdAt: new Date().toISOString(),
      link: referralLink,
      clicks: 0,
      conversions: 0,
    };

    // Log the referral creation (in production, save to database)
    console.log("Created referral:", referralData);

    res.status(200).json({
      success: true,
      referralId,
      referralLink,
      data: referralData,
    });
  } catch (error) {
    console.error("Error creating referral link:", error);
    res.status(500).json({
      error: "Failed to create referral link",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
