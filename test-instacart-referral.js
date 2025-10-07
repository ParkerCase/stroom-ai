// test-instacart-referral.js
// Simple test script to verify the Instacart referral API

const API_BASE = "http://localhost:3002/api/instacart";

async function testReferralGeneration() {
  console.log("🧪 Testing Instacart Referral API...\n");

  try {
    // Test 1: Generate a referral link
    console.log("1. Testing referral link generation...");
    const referralResponse = await fetch(`${API_BASE}/referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "test_user_123",
        campaignName: "test-campaign",
        customParams: {
          utm_term: "test",
          utm_content: "api-test",
        },
      }),
    });

    const referralData = await referralResponse.json();

    if (!referralResponse.ok) {
      throw new Error(`Referral generation failed: ${referralData.error}`);
    }

    console.log("✅ Referral link generated successfully!");
    console.log(`   Referral ID: ${referralData.referralId}`);
    console.log(`   Link: ${referralData.referralLink}\n`);

    // Test 2: Track a click event
    console.log("2. Testing click tracking...");
    const trackResponse = await fetch(`${API_BASE}/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        referralId: referralData.referralId,
        event: "click",
        userId: "test_user_123",
        metadata: {
          source: "test-script",
          timestamp: new Date().toISOString(),
        },
      }),
    });

    const trackData = await trackResponse.json();

    if (!trackResponse.ok) {
      throw new Error(`Click tracking failed: ${trackData.error}`);
    }

    console.log("✅ Click tracking successful!");
    console.log(`   Tracked event: ${trackData.tracked.event}\n`);

    // Test 3: Fetch analytics
    console.log("3. Testing analytics retrieval...");
    const analyticsResponse = await fetch(`${API_BASE}/analytics`);
    const analyticsData = await analyticsResponse.json();

    if (!analyticsResponse.ok) {
      throw new Error(`Analytics retrieval failed: ${analyticsData.error}`);
    }

    console.log("✅ Analytics retrieved successfully!");
    console.log(`   Total clicks: ${analyticsData.totals.totalClicks}`);
    console.log(
      `   Total conversions: ${analyticsData.totals.totalConversions}`
    );
    console.log(`   Total revenue: $${analyticsData.totals.totalRevenue}\n`);

    console.log(
      "🎉 All tests passed! Your Instacart affiliate system is working correctly."
    );
    console.log("\n📋 Next steps:");
    console.log(
      "   1. Set up your INSTACART_API_KEY and INSTACART_PARTNER_ID environment variables"
    );
    console.log(
      "   2. Visit http://localhost:3002/instacart-referral to generate affiliate links"
    );
    console.log(
      "   3. Visit http://localhost:3002/instacart-analytics to view performance"
    );
    console.log(
      "   4. Monitor commissions through your Instacart Impact dashboard"
    );
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    console.log("\n🔧 Troubleshooting:");
    console.log("   1. Make sure your Next.js server is running (npm run dev)");
    console.log("   2. Check that the API endpoints are accessible");
    console.log("   3. Verify your INSTACART_API_KEY is set correctly");
  }
}

// Run the test
testReferralGeneration();
