import { useState, useEffect } from "react";
import { supabase, referralTables, referralHelpers } from "../../lib/supabase";
import {
  DollarSign,
  Calendar,
  CreditCard,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function CommissionManager({ user, isStroomTeam }) {
  const [commissionData, setCommissionData] = useState({
    pendingCommissions: [],
    paidCommissions: [],
    tierInfo: {},
    paymentHistory: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCommissionData();
  }, [user]);

  const loadCommissionData = async () => {
    try {
      // Mock data for now
      const mockData = {
        pendingCommissions: [
          {
            id: 1,
            customerCompany: "TechCorp Inc",
            saleAmount: 25000,
            commissionAmount: 2500,
            conversionDate: "2024-01-15",
            status: "pending",
            daysUntilPayment: 15,
          },
          {
            id: 2,
            customerCompany: "DataFlow Systems",
            saleAmount: 18500,
            commissionAmount: 1850,
            conversionDate: "2024-01-10",
            status: "pending",
            daysUntilPayment: 20,
          },
        ],
        paidCommissions: [
          {
            id: 3,
            customerCompany: "InnovateTech",
            saleAmount: 32000,
            commissionAmount: 3200,
            paymentDate: "2024-01-01",
            status: "paid",
          },
        ],
        tierInfo: {
          currentTier: "silver",
          nextTier: "gold",
          referralsToNextTier: 2,
          currentRate: 0.12,
          nextRate: 0.15,
          totalReferrals: 8,
        },
        paymentHistory: [
          {
            id: 1,
            amount: 3200,
            date: "2024-01-01",
            method: "PayPal",
            status: "completed",
          },
        ],
      };

      setCommissionData(mockData);
    } catch (error) {
      console.error("Error loading commission data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case "bronze":
        return "text-orange-600";
      case "silver":
        return "text-gray-600";
      case "gold":
        return "text-yellow-600";
      case "platinum":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case "bronze":
        return "🥉";
      case "silver":
        return "🥈";
      case "gold":
        return "🥇";
      case "platinum":
        return "💎";
      default:
        return "🥉";
    }
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
      {/* Commission Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Pending Commissions
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                $
                {commissionData.pendingCommissions
                  .reduce((sum, item) => sum + item.commissionAmount, 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Paid Commissions
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                $
                {commissionData.paidCommissions
                  .reduce((sum, item) => sum + item.commissionAmount, 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Current Tier</p>
              <p
                className={`text-2xl font-semibold ${getTierColor(
                  commissionData.tierInfo.currentTier
                )}`}
              >
                {getTierIcon(commissionData.tierInfo.currentTier)}{" "}
                {commissionData.tierInfo.currentTier.charAt(0).toUpperCase() +
                  commissionData.tierInfo.currentTier.slice(1)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                Commission Rate
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {(commissionData.tierInfo.currentRate * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tier Progress */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Tier Progress
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Current Tier:{" "}
                {commissionData.tierInfo.currentTier.charAt(0).toUpperCase() +
                  commissionData.tierInfo.currentTier.slice(1)}
              </p>
              <p className="text-sm text-gray-500">
                Commission Rate:{" "}
                {(commissionData.tierInfo.currentRate * 100).toFixed(0)}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">
                Next Tier:{" "}
                {commissionData.tierInfo.nextTier.charAt(0).toUpperCase() +
                  commissionData.tierInfo.nextTier.slice(1)}
              </p>
              <p className="text-sm text-gray-500">
                Rate: {(commissionData.tierInfo.nextRate * 100).toFixed(0)}%
              </p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{
                width: `${Math.min(
                  (commissionData.tierInfo.totalReferrals /
                    (commissionData.tierInfo.totalReferrals +
                      commissionData.tierInfo.referralsToNextTier)) *
                    100,
                  100
                )}%`,
              }}
            ></div>
          </div>

          <p className="text-sm text-gray-500">
            {commissionData.tierInfo.referralsToNextTier} more referrals needed
            for next tier
          </p>
        </div>
      </div>

      {/* Pending Commissions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Pending Commissions
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Sale Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Payment In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commissionData.pendingCommissions.map((commission) => (
                <tr key={commission.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {commission.customerCompany}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${commission.saleAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${commission.commissionAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(commission.conversionDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {commission.daysUntilPayment} days
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Payment History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commissionData.paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${payment.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Payment Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>PayPal</option>
              <option>Bank Transfer</option>
              <option>Stripe</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Schedule
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Monthly (15th)</option>
              <option>Bi-weekly</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Update Payment Settings
          </button>
        </div>
      </div>
    </div>
  );
}
