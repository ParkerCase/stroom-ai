import { supabase, referralTables } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { referralCode, ipAddress, userAgent, conversionData } = req.body;

    if (!referralCode) {
      return res.status(400).json({ error: "Referral code is required" });
    }

    // Track the click
    const { error: clickError } = await supabase
      .from(referralTables.clicks)
      .insert({
        referral_code: referralCode,
        ip_address: ipAddress,
        user_agent: userAgent,
        timestamp: new Date().toISOString(),
        converted: false,
      });

    if (clickError) {
      console.error("Error tracking click:", clickError);
      return res.status(500).json({ error: "Failed to track click" });
    }

    // If this is a conversion, process it
    if (conversionData) {
      const { customerEmail, customerCompany, saleAmount } = conversionData;

      // Get referral account
      const { data: referralAccount, error: accountError } = await supabase
        .from(referralTables.accounts)
        .select("*")
        .eq("referral_code", referralCode)
        .single();

      if (accountError || !referralAccount) {
        console.error("Error finding referral account:", accountError);
        return res.status(404).json({ error: "Referral account not found" });
      }

      // Calculate commission
      const commissionAmount = saleAmount * referralAccount.commission_rate;

      // Create conversion record
      const { error: conversionError } = await supabase
        .from(referralTables.conversions)
        .insert({
          referral_code: referralCode,
          customer_email: customerEmail,
          customer_company: customerCompany,
          sale_amount: saleAmount,
          commission_amount: commissionAmount,
          status: "pending",
          conversion_date: new Date().toISOString(),
        });

      if (conversionError) {
        console.error("Error creating conversion:", conversionError);
        return res.status(500).json({ error: "Failed to create conversion" });
      }

      // Update referral account stats
      const { error: updateError } = await supabase
        .from(referralTables.accounts)
        .update({
          referral_count: referralAccount.referral_count + 1,
          pending_commissions:
            referralAccount.pending_commissions + commissionAmount,
          total_earnings: referralAccount.total_earnings + commissionAmount,
        })
        .eq("referral_code", referralCode);

      if (updateError) {
        console.error("Error updating referral account:", updateError);
      }

      // Update click record to mark as converted
      await supabase
        .from(referralTables.clicks)
        .update({ converted: true })
        .eq("referral_code", referralCode)
        .eq("ip_address", ipAddress)
        .order("timestamp", { ascending: false })
        .limit(1);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in track-referral:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
