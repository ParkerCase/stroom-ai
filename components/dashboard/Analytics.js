import { useState, useEffect } from "react";
import { supabase, referralTables } from "../../lib/supabase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Analytics({ user, isStroomTeam }) {
  const [analyticsData, setAnalyticsData] = useState({
    monthlyEarnings: [],
    conversionFunnel: [],
    topReferrers: [],
    performanceMetrics: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalyticsData();
  }, [user, isStroomTeam]);

  const loadAnalyticsData = async () => {
    try {
      // Mock data for now - in real implementation, this would come from Supabase
      const mockData = {
        monthlyEarnings: [
          { month: "Jan", earnings: 2400 },
          { month: "Feb", earnings: 1398 },
          { month: "Mar", earnings: 9800 },
          { month: "Apr", earnings: 3908 },
          { month: "May", earnings: 4800 },
          { month: "Jun", earnings: 3800 },
        ],
        conversionFunnel: [
          { stage: "Clicks", count: 1000 },
          { stage: "Demos", count: 250 },
          { stage: "Proposals", count: 75 },
          { stage: "Closed", count: 25 },
        ],
        topReferrers: [
          { name: "John Smith", referrals: 15, earnings: 12500 },
          { name: "Sarah Johnson", referrals: 12, earnings: 9800 },
          { name: "Mike Davis", referrals: 8, earnings: 6400 },
          { name: "Lisa Wilson", referrals: 6, earnings: 4800 },
        ],
        performanceMetrics: {
          totalRevenue: 125000,
          averageCommission: 2500,
          conversionRate: 2.5,
          totalReferrals: 150,
        },
      };

      setAnalyticsData(mockData);
    } catch (error) {
      console.error("Error loading analytics data:", error);
    } finally {
      setLoading(false);
    }
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Total Revenue
          </h3>
          <p className="text-3xl font-bold text-green-600">
            ${analyticsData.performanceMetrics.totalRevenue.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Avg Commission
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            $
            {analyticsData.performanceMetrics.averageCommission.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Conversion Rate
          </h3>
          <p className="text-3xl font-bold text-purple-600">
            {analyticsData.performanceMetrics.conversionRate}%
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Total Referrals
          </h3>
          <p className="text-3xl font-bold text-orange-600">
            {analyticsData.performanceMetrics.totalReferrals}
          </p>
        </div>
      </div>

      {/* Monthly Earnings Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Monthly Earnings
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData.monthlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value) => [
                  `$${value.toLocaleString()}`,
                  "Earnings",
                ]}
              />
              <Bar dataKey="earnings" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Conversion Funnel
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData.conversionFunnel}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ stage, percent }) =>
                    `${stage} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {analyticsData.conversionFunnel.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Referrers */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Top Referrers
          </h3>
          <div className="space-y-4">
            {analyticsData.topReferrers.map((referrer, index) => (
              <div
                key={referrer.name}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{referrer.name}</p>
                    <p className="text-sm text-gray-500">
                      {referrer.referrals} referrals
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    ${referrer.earnings.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* StroomAI Team Analytics */}
      {isStroomTeam && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Team Management Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Active Referrers
              </h4>
              <p className="text-2xl font-bold text-blue-600">47</p>
              <p className="text-sm text-gray-500">+12% from last month</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Pending Approvals
              </h4>
              <p className="text-2xl font-bold text-yellow-600">8</p>
              <p className="text-sm text-gray-500">Requires attention</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">
                This Month's Payouts
              </h4>
              <p className="text-2xl font-bold text-green-600">$45,200</p>
              <p className="text-sm text-gray-500">Due on 15th</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-4">
              Recent Contract Activity
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Referrer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Deal Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      2024-01-15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      John Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      TechCorp Inc
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $25,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Closed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      2024-01-14
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Sarah Johnson
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      DataFlow Systems
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $18,500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Proposal
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
