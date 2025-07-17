# StroomAI Referral Dashboard

A comprehensive referral management system built with Next.js, Supabase, and Tailwind CSS.

## Features

### For Referrers

- **Dashboard Overview**: Real-time stats and earnings tracking
- **Referral Tools**: Unique referral codes, social sharing, marketing materials
- **Commission Tracking**: Pending and paid commissions with payment history
- **Tier System**: Bronze, Silver, Gold, Platinum tiers with increasing commission rates
- **Analytics**: Conversion funnel, performance metrics, and earnings charts

### For StroomAI Team (@stroomai.com accounts)

- **Enhanced Analytics**: Detailed insights into all contracts and referrers
- **Team Management**: Monitor all referral activities and performance
- **Contract Tracking**: Full visibility into every deal and conversion

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Resend Email Configuration (optional)
RESEND_API_KEY=your_resend_api_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3002
```

### 2. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Run the database schema in the Supabase SQL Editor:

```sql
-- Copy and paste the entire schema from lib/database-setup.js
-- This will create all necessary tables and policies
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

The dashboard will be available at `http://localhost:3002`

## Database Schema

### Tables

1. **referral_accounts**: User referral profiles and stats
2. **referral_clicks**: Track referral link clicks
3. **referral_conversions**: Track successful conversions
4. **referral_payments**: Payment history and processing
5. **referral_activities**: Social sharing and activity tracking

### Key Features

- **Row Level Security**: Users can only see their own data
- **Automatic Tier Calculation**: Commission rates update based on performance
- **Real-time Updates**: Live dashboard updates using Supabase subscriptions
- **Conversion Tracking**: Complete funnel from click to payment

## Commission Structure

| Tier     | Requirements             | Commission Rate | Bonus |
| -------- | ------------------------ | --------------- | ----- |
| Bronze   | New referrers            | 10%             | -     |
| Silver   | 3+ successful referrals  | 12%             | -     |
| Gold     | 5+ successful referrals  | 15%             | -     |
| Platinum | 10+ successful referrals | 20%             | -     |

## API Endpoints

### Track Referral

```
POST /api/track-referral
{
  "referralCode": "ABC123",
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "conversionData": {
    "customerEmail": "customer@company.com",
    "customerCompany": "Company Name",
    "saleAmount": 25000
  }
}
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

```bash
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Usage

### For Referrers

1. **Registration**: Users sign up at `/auth/register`
2. **Dashboard Access**: Login at `/auth/login`
3. **Referral Sharing**: Use the dashboard tools to share referral links
4. **Commission Tracking**: Monitor earnings and pending payments

### For StroomAI Team

1. **Enhanced Access**: @stroomai.com accounts get additional features
2. **Team Analytics**: View all referrer performance
3. **Contract Management**: Track every deal through the system

## Security Features

- **Row Level Security**: Database-level access control
- **Authentication**: Supabase Auth with email/password
- **Session Management**: Secure session handling
- **Data Validation**: Input validation and sanitization

## Customization

### Styling

- Uses Tailwind CSS for consistent design
- Customizable color scheme in `tailwind.config.js`
- Responsive design for all devices

### Features

- Add new dashboard components in `components/dashboard/`
- Extend API endpoints in `pages/api/`
- Modify database schema in `lib/database-setup.js`

## Troubleshooting

### Common Issues

1. **Supabase Connection**: Verify environment variables
2. **Database Tables**: Ensure schema is properly executed
3. **Authentication**: Check Supabase Auth settings
4. **CORS Issues**: Configure allowed origins in Supabase

### Support

For issues or questions:

- Check Supabase logs in the dashboard
- Review browser console for errors
- Verify environment variables are set correctly

## Future Enhancements

- [ ] Email notifications for conversions
- [ ] Advanced analytics and reporting
- [ ] Mobile app version
- [ ] Integration with CRM systems
- [ ] Automated payment processing
- [ ] Referral contests and gamification
- [ ] API rate limiting and monitoring
- [ ] Multi-language support

## License

MIT License - see LICENSE file for details
