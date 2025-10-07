# Instacart Referral System

A complete referral link generator and tracking system for Instacart affiliate commissions.

## 🚀 Features

- **Referral Link Generation**: Create unique, trackable Instacart referral links
- **Click Tracking**: Monitor when users click your referral links
- **Analytics Dashboard**: View performance metrics and commission data
- **Campaign Management**: Organize referrals by campaign names
- **Custom Parameters**: Add custom UTM parameters for detailed tracking

## 📁 Files Created

### API Endpoints

- `pages/api/instacart/referral.js` - Generate referral links
- `pages/api/instacart/track.js` - Track click events
- `pages/api/instacart/analytics.js` - Retrieve analytics data

### Frontend Pages

- `pages/instacart-referral.js` - Referral link generator interface
- `pages/instacart-analytics.js` - Analytics dashboard

### Testing

- `test-instacart-referral.js` - Test script to verify functionality

## 🛠 Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root:

```bash
# Instacart API Configuration
INSTACART_API_KEY=your_instacart_api_key_here
INSTACART_PARTNER_ID=your_partner_id_here

# Add your other environment variables
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**⚠️ Important**:

- Replace `your_instacart_api_key_here` with your actual Instacart API key
- Replace `your_partner_id_here` with your Instacart affiliate partner ID (found in your Impact dashboard)

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Test the System

Run the test script to verify everything works:

```bash
node test-instacart-referral.js
```

## 🎯 Usage

### Generate Referral Links

1. Visit `http://localhost:3002/instacart-referral`
2. Fill in the form:
   - **User ID**: Optional identifier for the user
   - **Campaign Name**: Name for your campaign (e.g., "summer-promo")
   - **Custom Parameters**: JSON object with additional tracking parameters
3. Click "Generate Referral Link"
4. Copy and share the generated link

### View Analytics

1. Visit `http://localhost:3002/instacart-analytics`
2. View performance metrics:
   - Total clicks
   - Total conversions
   - Conversion rate
   - Total revenue
3. Filter by User ID or Campaign Name
4. View detailed referral link performance

### Track Clicks

When users click your referral links, the system automatically tracks:

- Click events
- User information
- Timestamp
- IP address
- User agent

## 💰 Earning Commissions

Since you already have the Instacart affiliate program:

1. **Set Your Partner ID**: Add your partner ID to the environment variables
2. **Generate Affiliate Links**: Use the system to create tracked referral links
3. **Share Links**: Place links on your platform for users to click
4. **Monitor Performance**: Track commissions through Instacart's Impact dashboard

**Commission Details:**

- **Rate**: Up to $10 per new customer's first order
- **Eligibility**: Only new Instacart customers who complete their first order
- **Tracking**: Uses official Instacart affiliate parameters for proper attribution

## 🔧 Customization

### Database Integration

Currently using mock data. To integrate with a real database:

1. Update `pages/api/instacart/analytics.js` to fetch from your database
2. Modify `pages/api/instacart/track.js` to save tracking data
3. Update `pages/api/instacart/referral.js` to store referral data

### Enhanced Tracking

Add more tracking events:

- Signup tracking
- Conversion tracking
- Revenue tracking
- A/B testing

### UI Customization

The frontend uses Tailwind CSS and can be customized:

- Modify colors and styling
- Add more analytics charts
- Create custom dashboards
- Add export functionality

## 🚨 Security Notes

- **Never commit API keys** to version control
- **Use environment variables** for sensitive data
- **Implement rate limiting** for production use
- **Add authentication** for admin access
- **Validate input data** to prevent injection attacks

## 📊 API Endpoints

### POST `/api/instacart/referral`

Generate a new referral link.

**Request Body:**

```json
{
  "userId": "optional_user_id",
  "campaignName": "campaign_name",
  "customParams": {
    "utm_term": "organic",
    "utm_content": "banner"
  }
}
```

**Response:**

```json
{
  "success": true,
  "referralId": "stroom_1703123456789_abc123def",
  "referralLink": "https://instacart.com?utm_source=stroom&...",
  "data": { ... }
}
```

### POST `/api/instacart/track`

Track an event (click, conversion, etc.).

**Request Body:**

```json
{
  "referralId": "stroom_1703123456789_abc123def",
  "event": "click",
  "userId": "user_123",
  "metadata": { ... }
}
```

### GET `/api/instacart/analytics`

Retrieve analytics data.

**Query Parameters:**

- `userId`: Filter by user ID
- `campaignName`: Filter by campaign
- `limit`: Limit results (default: 50)

## 🎉 Next Steps

1. **Test the system** with the provided test script
2. **Generate referral links** using the web interface
3. **Apply for Instacart affiliate program** to earn real commissions
4. **Integrate with your database** for persistent storage
5. **Add authentication** for secure access
6. **Deploy to production** when ready

## 📞 Support

If you encounter any issues:

1. Check the console logs for error messages
2. Verify your API key is correctly set
3. Ensure the development server is running
4. Run the test script to diagnose problems

Happy referring! 🛒💰
