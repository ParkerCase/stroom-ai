import { useState, useEffect } from "react";
import { supabase, referralTables } from "../../lib/supabase";
import {
  Copy,
  Share2,
  Download,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Target,
} from "lucide-react";

export default function ReferralDashboard({ user, isStroomTeam }) {
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 0,
    pendingCommissions: 0,
    paidCommissions: 0,
    conversionRate: 0,
    thisMonthEarnings: 0,
  });
  const [referralCode, setReferralCode] = useState("");
  const [referralHistory, setReferralHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReferralData();
  }, [user]);

  const loadReferralData = async () => {
    try {
      // Get referral account data
      const { data: accountData } = await supabase
        .from(referralTables.accounts)
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (accountData) {
        setReferralCode(accountData.referral_code);
        setReferralStats({
          totalReferrals: accountData.referral_count || 0,
          pendingCommissions: accountData.pending_commissions || 0,
          paidCommissions: accountData.paid_commissions || 0,
          conversionRate: accountData.conversion_rate || 0,
          thisMonthEarnings: accountData.total_earnings || 0,
        });
      }

      // Get referral history
      const { data: historyData } = await supabase
        .from(referralTables.conversions)
        .select("*")
        .eq("referral_code", accountData?.referral_code)
        .order("conversion_date", { ascending: false })
        .limit(10);

      if (historyData) {
        setReferralHistory(
          historyData.map((item) => ({
            id: item.id,
            date: new Date(item.conversion_date).toLocaleDateString(),
            company: item.customer_company || "N/A",
            status: item.status,
            commission: item.commission_amount,
            saleAmount: item.sale_amount,
          }))
        );
      }
    } catch (error) {
      console.error("Error loading referral data:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralLink = async () => {
    const link = `https://stroomai.com/demo?ref=${referralCode}`;
    try {
      await navigator.clipboard.writeText(link);
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const shareOnLinkedIn = () => {
    const text = `Transform your HubSpot CRM with AI! Get 50% off StroomAI's enterprise solution. Limited time offer!`;
    const url = `https://stroomai.com/demo?ref=${referralCode}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(text)}`;
    window.open(linkedInUrl, "_blank");
  };

  const generateSocialPost = () => {
    const post = `🚀 Ready to revolutionize your CRM?

AI-powered HubSpot enhancement that delivers 40% efficiency gains!

Limited time: 50% off enterprise solutions
Demo: https://stroomai.com/demo?ref=${referralCode}

#AI #CRM #HubSpot #Productivity`;

    // Copy to clipboard
    navigator.clipboard.writeText(post);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                This Month's Earnings
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                ${referralStats.thisMonthEarnings.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Total Referrals
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {referralStats.totalReferrals}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Pending Commissions
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                ${referralStats.pendingCommissions.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Conversion Rate
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {referralStats.conversionRate}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Tools */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Your Referral Code
          </h2>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">Referral Code</p>
              <p className="text-2xl font-mono text-blue-600">{referralCode}</p>
            </div>
            <button
              onClick={copyReferralLink}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={shareOnLinkedIn}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share on LinkedIn
            </button>
            <button
              onClick={generateSocialPost}
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Generate Social Post
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Download Materials
            </button>
          </div>
        </div>
      </div>

      {/* Marketing Materials */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Marketing Materials
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Demo Video</h4>
              <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100">
                <Download className="h-4 w-4 mr-2" />
                Download/Share
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                One-Page Overview
              </h4>
              <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">ROI Calculator</h4>
              <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100">
                <ExternalLink className="h-4 w-4 mr-2" />
                Share Tool
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Case Studies</h4>
              <button className="w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100">
                <Download className="h-4 w-4 mr-2" />
                Download Pack
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Referral Activity
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {referralHistory.length > 0 ? (
                referralHistory.map((referral) => (
                  <tr key={referral.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {referral.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {referral.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          referral.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : referral.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : referral.status === "paid"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {referral.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${referral.commission}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Follow Up
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No referral activity yet. Start sharing your referral link!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Commission Payment Info */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Commission Payments
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Next Payment Date
              </p>
              <p className="text-lg text-gray-900">15th of each month</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                Payment Method
              </p>
              <p className="text-lg text-gray-900">PayPal / Bank Transfer</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Update Payment Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
