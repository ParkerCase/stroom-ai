// pages/api/instacart/track.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { referralId, event, userId, metadata } = req.body;

    if (!referralId || !event) {
      return res
        .status(400)
        .json({ error: "Missing required fields: referralId and event" });
    }

    // Track the event (in production, save to database)
    const trackingData = {
      referralId,
      event, // 'click', 'conversion', 'signup', etc.
      userId: userId || "anonymous",
      timestamp: new Date().toISOString(),
      metadata: metadata || {},
      ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      userAgent: req.headers["user-agent"],
    };

    console.log("Tracking event:", trackingData);

    // Here you would typically:
    // 1. Save to database
    // 2. Update referral statistics
    // 3. Send to analytics service
    // 4. Trigger webhooks if needed

    res.status(200).json({
      success: true,
      tracked: trackingData,
    });
  } catch (error) {
    console.error("Error tracking event:", error);
    res.status(500).json({
      error: "Failed to track event",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
