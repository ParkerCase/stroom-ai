# Email System Test Instructions

## Quick Test (Recommended)

### Option 1: Using the Test API Endpoint

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Enable testing** by adding to your `.env.local`:
   ```
   ALLOW_EMAIL_TEST=true
   ```

3. **Make a POST request** to the test endpoint:

   Using curl:
   ```bash
   curl -X POST http://localhost:3002/api/test-email \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Your Name",
       "email": "your-email@example.com",
       "company": "Test Company",
       "projectDescription": "Test project description",
       "timeline": "medium",
       "stage": "prototype",
       "budgetRange": "20k-50k",
       "complexity": "medium",
       "dataAvailability": "have-data",
       "engagementModel": "commission-hourly",
       "expectedDeliverables": "Working prototype"
     }'
   ```

   Or using the shell script:
   ```bash
   ./test-email-simple.sh
   ```

4. **Check your email inboxes:**
   - Approval email → `info@stroomai.com`
   - Client confirmation → The email you specified in the test

### Option 2: Test via Project Brief Widget

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Open your site** in a browser: `http://localhost:3002`

3. **Click the Project Brief widget** (bottom-right corner)

4. **Fill out the form** with test data

5. **Submit** - Emails will be sent automatically

## What to Check

✅ **Approval Email** (to info@stroomai.com):
- Contains client information
- Shows Claude's analysis
- Has Approve/Reject mailto links
- Matches brand aesthetic

✅ **Client Confirmation Email** (to client):
- Thank you message
- "What to Expect" section
- Professional signature
- Brand styling

## Troubleshooting

### Emails not sending?

1. **Check RESEND_API_KEY:**
   ```bash
   echo $RESEND_API_KEY
   ```
   Make sure it's set in `.env.local`

2. **Check Resend dashboard:**
   - Log into https://resend.com
   - Check the "Emails" tab for delivery status
   - Check for any errors

3. **Check server logs:**
   - Look for error messages in your terminal
   - Check for rate limiting warnings

4. **Verify email addresses:**
   - Make sure `info@stroomai.com` is verified in Resend
   - Make sure the "from" domain is verified

### Rate Limiting

The system has rate limiting (10 emails per minute). If you hit the limit:
- Wait 1 minute and try again
- Or modify the rate limit settings in `lib/email.ts`

## Test Data Examples

### Simple Project
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "projectDescription": "Build a simple API for data processing",
  "timeline": "short",
  "stage": "prototype",
  "budgetRange": "10k-20k",
  "complexity": "simple",
  "dataAvailability": "have-data",
  "engagementModel": "hourly",
  "expectedDeliverables": "Working API with documentation"
}
```

### Complex Project
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "Tech Startup",
  "projectDescription": "Build a comprehensive biochemical interaction platform with real-time optimization, multi-platform integration, and advanced ML models",
  "timeline": "long",
  "stage": "production",
  "budgetRange": "50k+",
  "complexity": "complex",
  "dataAvailability": "need-data",
  "engagementModel": "equity-commission",
  "expectedDeliverables": "Full platform, trained models, API, documentation, deployment"
}
```

## Success Indicators

✅ Both functions return `{ success: true }`
✅ No errors in server logs
✅ Emails appear in Resend dashboard
✅ Emails delivered to inboxes
✅ Email styling matches brand
✅ All links work correctly

