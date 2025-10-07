// pages/api/instacart/analytics.js
import { NextApiRequest, NextApiResponse } from "next";

// Mock data - in production, this would come from your database
const mockAnalytics = [
  {
    referralId: "stroom_1703123456789_abc123def",
    userId: "user_001",
    campaignName: "summer-promo",
    createdAt: "2024-01-01T10:00:00Z",
    clicks: 45,
    conversions: 3,
    revenue: 30.0,
    status: "active",
  },
  {
    referralId: "stroom_1703123456790_def456ghi",
    userId: "user_002",
    campaignName: "holiday-special",
    createdAt: "2024-01-02T14:30:00Z",
    clicks: 23,
    conversions: 1,
    revenue: 10.0,
    status: "active",
  },
];

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userId, campaignName, limit = 50 } = req.query;

    let filteredData = mockAnalytics;

    // Filter by userId if provided
    if (userId) {
      filteredData = filteredData.filter((item) => item.userId === userId);
    }

    // Filter by campaignName if provided
    if (campaignName) {
      filteredData = filteredData.filter(
        (item) => item.campaignName === campaignName
      );
    }

    // Apply limit
    filteredData = filteredData.slice(0, parseInt(limit));

    // Calculate totals
    const totals = {
      totalClicks: filteredData.reduce((sum, item) => sum + item.clicks, 0),
      totalConversions: filteredData.reduce(
        (sum, item) => sum + item.conversions,
        0
      ),
      totalRevenue: filteredData.reduce((sum, item) => sum + item.revenue, 0),
      conversionRate: 0,
    };

    if (totals.totalClicks > 0) {
      totals.conversionRate =
        (totals.totalConversions / totals.totalClicks) * 100;
    }

    res.status(200).json({
      success: true,
      data: filteredData,
      totals,
      count: filteredData.length,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({
      error: "Failed to fetch analytics",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
