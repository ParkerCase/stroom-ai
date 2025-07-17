import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database schema helpers
export const referralTables = {
  accounts: "referral_accounts",
  clicks: "referral_clicks",
  conversions: "referral_conversions",
  payments: "referral_payments",
  activities: "referral_activities",
};

// Helper functions for referral system
export const referralHelpers = {
  // Generate unique referral code
  generateReferralCode: (email) => {
    const timestamp = Date.now().toString(36);
    const emailHash = email.split("@")[0].substring(0, 3);
    return `${emailHash}${timestamp}`.toUpperCase();
  },

  // Calculate commission based on tier
  calculateCommission: (saleAmount, tier = "bronze") => {
    const tiers = {
      bronze: 0.1,
      silver: 0.12,
      gold: 0.15,
      platinum: 0.2,
    };
    return saleAmount * (tiers[tier] || tiers.bronze);
  },

  // Determine tier based on performance
  getTier: (successfulReferrals) => {
    if (successfulReferrals >= 10) return "platinum";
    if (successfulReferrals >= 5) return "gold";
    if (successfulReferrals >= 3) return "silver";
    return "bronze";
  },
};
