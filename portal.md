// Referral Dashboard Component
const ReferralDashboard = () => {
const [referralStats, setReferralStats] = useState({
totalReferrals: 0,
pendingCommissions: 0,
paidCommissions: 0,
conversionRate: 0,
thisMonthEarnings: 0
});

const [referralCode, setReferralCode] = useState('');
const [referralHistory, setReferralHistory] = useState([]);

return (

<div className="referral-dashboard">
{/_ Header Stats _/}
<div className="stats-grid">
<div className="stat-card">
<h3>${referralStats.thisMonthEarnings}</h3>
          <p>This Month's Earnings</p>
        </div>
        <div className="stat-card">
          <h3>{referralStats.totalReferrals}</h3>
          <p>Total Referrals</p>
        </div>
        <div className="stat-card">
          <h3>${referralStats.pendingCommissions}</h3>
<p>Pending Commissions</p>
</div>
<div className="stat-card">
<h3>{referralStats.conversionRate}%</h3>
<p>Conversion Rate</p>
</div>
</div>

      {/* Referral Tools */}
      <div className="referral-tools">
        <div className="referral-code-section">
          <h2>Your Referral Code: {referralCode}</h2>
          <div className="sharing-tools">
            <button className="copy-link">Copy Referral Link</button>
            <button className="share-linkedin">Share on LinkedIn</button>
            <button className="generate-post">Generate Social Post</button>
          </div>
        </div>

        {/* Marketing Materials */}
        <div className="marketing-materials">
          <h3>Marketing Materials</h3>
          <div className="materials-grid">
            <div className="material-item">
              <h4>Demo Video</h4>
              <button>Download/Share</button>
            </div>
            <div className="material-item">
              <h4>One-Page Overview</h4>
              <button>Download PDF</button>
            </div>
            <div className="material-item">
              <h4>ROI Calculator</h4>
              <button>Share Tool</button>
            </div>
            <div className="material-item">
              <h4>Case Studies</h4>
              <button>Download Pack</button>
            </div>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div className="referral-history">
        <h3>Referral Activity</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Company</th>
              <th>Status</th>
              <th>Commission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {referralHistory.map(referral => (
              <tr key={referral.id}>
                <td>{referral.date}</td>
                <td>{referral.company}</td>
                <td>
                  <span className={`status ${referral.status}`}>
                    {referral.status}
                  </span>
                </td>
                <td>${referral.commission}</td>
                <td>
                  <button>Follow Up</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Commission Payment */}
      <div className="payment-section">
        <h3>Commission Payments</h3>
        <div className="payment-info">
          <p>Next Payment Date: {nextPaymentDate}</p>
          <p>Payment Method: {paymentMethod}</p>
          <button>Update Payment Info</button>
        </div>
      </div>
    </div>

);
};

and then the tracking system unless if we need to use supabase or something like that. if there are better options for solid databases that are free and like supabase but not as extensive that users could sign in and out with and see their sales and everything, this would be extremely helpful. I'd also like for anyone with an @stroomai.com account to be able to see even more insight into each and every contract that goes through so i can monitor and divide tasks up properly for myself.

// Referral System API Structure
const ReferralSystem = {
// User Registration & Code Generation
createReferralAccount: async (userData) => {
const referralCode = generateUniqueCode(userData.email);
const account = {
userId: userData.id,
referralCode: referralCode,
commissionRate: 0.10, // 10%
totalEarnings: 0,
pendingCommissions: 0,
paidCommissions: 0,
referralCount: 0,
conversionRate: 0,
createdAt: new Date(),
paymentInfo: null,
status: 'active'
};

    return await saveReferralAccount(account);

},

// Track Referral Clicks
trackReferralClick: async (referralCode, ipAddress, userAgent) => {
const click = {
referralCode: referralCode,
ipAddress: ipAddress,
userAgent: userAgent,
timestamp: new Date(),
converted: false,
conversionValue: 0
};

    return await saveReferralClick(click);

},

// Process Conversion
processConversion: async (referralCode, saleAmount, customerInfo) => {
const referralAccount = await getReferralAccount(referralCode);
const commissionAmount = saleAmount \* referralAccount.commissionRate;

    const conversion = {
      referralCode: referralCode,
      customerEmail: customerInfo.email,
      customerCompany: customerInfo.company,
      saleAmount: saleAmount,
      commissionAmount: commissionAmount,
      status: 'pending', // pending -> approved -> paid
      conversionDate: new Date(),
      paymentDate: null
    };

    // Update referral account stats
    await updateReferralStats(referralCode, {
      totalEarnings: referralAccount.totalEarnings + commissionAmount,
      pendingCommissions: referralAccount.pendingCommissions + commissionAmount,
      referralCount: referralAccount.referralCount + 1
    });

    // Send notification emails
    await sendCommissionNotification(referralAccount.userId, conversion);

    return await saveConversion(conversion);

},

// Generate Marketing Materials
generateMarketingMaterials: (referralCode) => {
return {
referralLink: `https://stroomai.com/demo?ref=${referralCode}`,
linkedInPost: generateLinkedInPost(referralCode),
emailTemplate: generateEmailTemplate(referralCode),
socialMediaImages: generateSocialImages(referralCode),
onePagePDF: generateOnePagePDF(referralCode)
};
}
};

and the integration:
// Integration with your existing StroomAI.com navigation
const NavigationUpdate = {
// Add to main navigation
mainNav: [
{ name: 'Home', href: '/' },
{ name: 'Solutions', href: '/solutions' },
{ name: 'Pricing', href: '/pricing' },
{ name: 'Partners', href: '/partners' }, // NEW
{ name: 'Contact', href: '/contact' }
],

// User menu (when logged in)
userMenu: [
{ name: 'Dashboard', href: '/dashboard' },
{ name: 'Referrals', href: '/referrals' }, // NEW
{ name: 'Earnings', href: '/earnings' }, // NEW
{ name: 'Settings', href: '/settings' },
{ name: 'Logout', href: '/logout' }
]
};

// Referral onboarding flow
const ReferralOnboarding = () => {
return (

<div className="onboarding-flow">
<Step1_Welcome />
<Step2_CreateAccount />
<Step3_PaymentSetup />
<Step4_MarketingMaterials />
<Step5_FirstReferral />
</div>
);
};

and then this below:
// Commission Management System
const CommissionManager = {
// Tiered commission structure
calculateCommission: (saleAmount, referrerLevel) => {
const tiers = {
bronze: 0.10, // 10% for new referrers
silver: 0.12, // 12% for 3+ successful referrals
gold: 0.15, // 15% for 10+ successful referrals
platinum: 0.20 // 20% for top performers
};

    return saleAmount * tiers[referrerLevel];

},

// Automatic payment processing
processMonthlyPayments: async () => {
const pendingCommissions = await getPendingCommissions();

    for (const commission of pendingCommissions) {
      if (commission.age > 30) { // Pay after 30 days
        await processPayment({
          userId: commission.userId,
          amount: commission.amount,
          description: `Referral commission for ${commission.customerCompany}`,
          method: commission.paymentMethod // PayPal, bank transfer, etc.
        });

        await updateCommissionStatus(commission.id, 'paid');
        await sendPaymentConfirmation(commission.userId, commission);
      }
    }

},

// Referrer performance tracking
updateReferrerLevel: async (userId) => {
const stats = await getReferrerStats(userId);
let newLevel = 'bronze';

    if (stats.successfulReferrals >= 10) newLevel = 'platinum';
    else if (stats.successfulReferrals >= 5) newLevel = 'gold';
    else if (stats.successfulReferrals >= 3) newLevel = 'silver';

    await updateReferrerLevel(userId, newLevel);

}
};

and
// Make referrals shareable and trackable
const ViralFeatures = {
// Social sharing with tracking
socialShare: {
generateShareableContent: (referralCode, platform) => {
const baseContent = {
title: "AI-Powered CRM Enhancement - 40% Efficiency Gains",
description: "Transform your HubSpot CRM with AI. Limited time 50% off!",
image: "https://stroomai.com/images/ai-demo-preview.jpg",
url: `https://stroomai.com/demo?ref=${referralCode}&utm_source=${platform}`
};

      return platforms[platform](baseContent);
    },

    trackShares: async (referralCode, platform) => {
      await logActivity(referralCode, 'share', platform);
    }

},

// Referral contests and incentives
contests: {
monthlyLeaderboard: async () => {
const topReferrers = await getTopReferrers('month');
const prizes = [5000, 3000, 1000]; // Bonus prizes

      return {
        leaderboard: topReferrers,
        prizes: prizes,
        deadline: getEndOfMonth()
      };
    },

    bonusIncentives: {
      firstReferral: 500,  // $500 bonus for first successful referral
      milestone5: 2500,    // $2500 bonus at 5 referrals
      milestone10: 5000    // $5000 bonus at 10 referrals
    }

}
};

and analytics:
// Track everything for optimization
const ReferralAnalytics = {
// Track conversion funnel
trackFunnel: {
click: (referralCode) => logEvent('referral_click', { referralCode }),
demo: (referralCode) => logEvent('demo_scheduled', { referralCode }),
proposal: (referralCode) => logEvent('proposal_sent', { referralCode }),
close: (referralCode) => logEvent('deal_closed', { referralCode })
},

// A/B test different referral incentives
testIncentives: {
groupA: { commission: 0.10, bonus: 0 },
groupB: { commission: 0.12, bonus: 500 },
groupC: { commission: 0.08, bonus: 1000 }
},

// Performance reporting
generateReport: async (timeRange) => ({
totalReferrals: await countReferrals(timeRange),
conversionRate: await calculateConversionRate(timeRange),
averageCommission: await getAverageCommission(timeRange),
topPerformers: await getTopReferrers(timeRange),
revenueGenerated: await getTotalRevenue(timeRange)
})
};
