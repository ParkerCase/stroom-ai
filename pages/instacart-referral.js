// pages/instacart-referral.js
import { useState } from "react";
import Head from "next/head";

export default function InstacartReferralGenerator() {
  const [formData, setFormData] = useState({
    userId: "",
    campaignName: "",
    customParams: "",
  });
  const [referralData, setReferralData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/instacart/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: formData.userId || undefined,
          campaignName: formData.campaignName || undefined,
          customParams: formData.customParams
            ? JSON.parse(formData.customParams)
            : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate referral link");
      }

      setReferralData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const trackClick = async (referralId) => {
    try {
      await fetch("/api/instacart/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referralId,
          event: "click",
          userId: formData.userId || "anonymous",
        }),
      });
    } catch (err) {
      console.error("Failed to track click:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Instacart Referral Generator - StroomAI</title>
        <meta
          name="description"
          content="Generate Instacart referral links and track commissions"
        />
      </Head>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Instacart Referral Generator
          </h1>
          <p className="text-gray-600 mb-8">
            Generate tracked referral links for Instacart and earn commissions
            on new customer orders.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                User ID (Optional)
              </label>
              <input
                type="text"
                id="userId"
                value={formData.userId}
                onChange={(e) =>
                  setFormData({ ...formData, userId: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter user identifier"
              />
            </div>

            <div>
              <label
                htmlFor="campaignName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Campaign Name
              </label>
              <input
                type="text"
                id="campaignName"
                value={formData.campaignName}
                onChange={(e) =>
                  setFormData({ ...formData, campaignName: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., summer-promo, holiday-special"
              />
            </div>

            <div>
              <label
                htmlFor="customParams"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Custom Parameters (JSON)
              </label>
              <textarea
                id="customParams"
                value={formData.customParams}
                onChange={(e) =>
                  setFormData({ ...formData, customParams: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder='{"utm_term": "organic", "utm_content": "banner"}'
              />
              <p className="text-sm text-gray-500 mt-1">
                Optional JSON object with additional tracking parameters
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate Referral Link"}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {referralData && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-md">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                Referral Link Generated Successfully!
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral ID
                  </label>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 p-2 bg-gray-100 rounded text-sm">
                      {referralData.referralId}
                    </code>
                    <button
                      onClick={() => copyToClipboard(referralData.referralId)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Link
                  </label>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 p-2 bg-gray-100 rounded text-sm break-all">
                      {referralData.referralLink}
                    </code>
                    <button
                      onClick={() => copyToClipboard(referralData.referralLink)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={referralData.referralLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick(referralData.referralId)}
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Test Referral Link →
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              How It Works
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li>
                • Generate unique referral links with official Instacart
                affiliate tracking
              </li>
              <li>• Share links with potential customers</li>
              <li>• Track clicks and conversions automatically</li>
              <li>
                • Earn up to $10 commission per new customer's first order
              </li>
              <li>
                • Monitor performance through Instacart's Impact dashboard
              </li>
            </ul>
          </div>

          <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-md">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              💰 Commission Details
            </h3>
            <div className="text-green-700 space-y-2">
              <p>
                <strong>You earn commission when:</strong>
              </p>
              <ul className="ml-4 space-y-1">
                <li>• A new customer clicks your affiliate link</li>
                <li>
                  • They sign up for Instacart (if not already a customer)
                </li>
                <li>• They complete their first order</li>
              </ul>
              <p className="mt-3">
                <strong>Commission Rate:</strong> Up to $10 per new customer's
                first order
              </p>
              <p>
                <strong>Tracking:</strong> Uses official Instacart affiliate
                parameters for proper attribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
