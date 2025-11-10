#!/bin/bash

# Simple test script for email system
# Make sure your Next.js dev server is running on port 3002

echo "🧪 Testing Email Notification System"
echo "======================================"
echo ""
echo "Make sure your dev server is running: npm run dev"
echo ""
read -p "Press Enter to continue..."

# Check if server is running
if ! curl -s http://localhost:3002 > /dev/null; then
    echo "❌ Server is not running on http://localhost:3002"
    echo "   Please start it with: npm run dev"
    exit 1
fi

echo "✅ Server is running"
echo ""
echo "📧 Sending test request..."
echo ""

# Send test request
curl -X POST http://localhost:3002/api/test-email \
  -H "Content-Type: application/json" \
  -H "x-test-key: test" \
  -d '{
    "name": "Test User",
    "email": "info@stroomai.com",
    "company": "Test Company",
    "projectDescription": "This is a test project brief to verify the email notification system.",
    "timeline": "medium",
    "stage": "prototype",
    "budgetRange": "20k-50k",
    "complexity": "medium",
    "dataAvailability": "have-data",
    "engagementModel": "commission-hourly",
    "expectedDeliverables": "Working prototype, API integration"
  }' | jq '.'

echo ""
echo "✅ Test complete!"
echo "Check your email inboxes:"
echo "  - Approval email: info@stroomai.com"
echo "  - Client confirmation: info@stroomai.com (or the email you specified)"

