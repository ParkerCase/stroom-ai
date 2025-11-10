// Test script for email notification system
// Run with: node test-email-system.js

require('dotenv').config({ path: '.env.local' });

// Mock the email functions (we'll import the actual ones)
async function testEmailSystem() {
  console.log('🧪 Testing Email Notification System\n');
  console.log('=' .repeat(50));

  // Check environment variables
  console.log('\n📋 Environment Check:');
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is not set in environment variables');
    console.log('   Please add RESEND_API_KEY to your .env.local file');
    return;
  }
  console.log('✅ RESEND_API_KEY is configured');

  // Import email functions
  let sendApprovalEmail, sendClientConfirmation;
  try {
    // For Node.js, we need to use dynamic import or compile TypeScript
    // Let's use a workaround - we'll test via API endpoint instead
    console.log('\n📧 Testing via API endpoint...\n');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com', // Change this to your email for testing
      company: 'Test Company',
      projectDescription: 'This is a test project brief to verify the email notification system is working correctly. The project involves building a biochemical interaction platform for personalized recommendations.',
      timeline: 'medium',
      stage: 'prototype',
      budgetRange: '20k-50k',
      complexity: 'medium',
      dataAvailability: 'have-data',
      engagementModel: 'commission-hourly',
      expectedDeliverables: 'Working prototype, API integration, documentation'
    };

    const testAnalysis = {
      complexityScore: 6,
      estimatedHours: 120,
      hourRange: { min: 100, max: 150 },
      recommendedRate: 150,
      totalEstimate: { min: 15000, max: 22500 },
      riskFactors: [
        'Data quality may need validation',
        'Integration complexity with existing systems'
      ],
      questions: [
        'What is the expected user base size?',
        'Are there any compliance requirements?'
      ],
      suitability: 'good',
      autoApprove: false,
      reasoning: 'This is a well-scoped project with clear requirements. The medium complexity and existing data availability make it a good fit. The commission-hourly model aligns well with the growth-stage company profile.'
    };

    // Test via API endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002';
    const apiUrl = `${baseUrl}/api/submit-brief`;

    console.log('📤 Sending test request to:', apiUrl);
    console.log('\n📝 Test Data:');
    console.log('   Name:', testData.name);
    console.log('   Email:', testData.email);
    console.log('   Company:', testData.company);
    console.log('   Project:', testData.projectDescription.substring(0, 50) + '...');
    console.log('\n⏳ Sending request...\n');

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ API Request Successful!');
      console.log('\n📊 Response:');
      console.log(JSON.stringify(result, null, 2));
      console.log('\n📧 Check your email inboxes:');
      console.log('   - Approval email should be sent to: info@stroomai.com');
      console.log('   - Confirmation email should be sent to:', testData.email);
      console.log('\n⚠️  Note: If you used test@example.com, the confirmation email won\'t be delivered.');
      console.log('   Change the email in the test data to your real email to receive it.');
    } else {
      console.error('❌ API Request Failed');
      console.error('Response:', result);
    }

  } catch (error) {
    console.error('❌ Test failed with error:');
    console.error(error.message);
    if (error.stack) {
      console.error('\nStack trace:');
      console.error(error.stack);
    }
  }
}

// Alternative: Direct function test (requires TypeScript compilation)
async function testDirectFunctions() {
  console.log('\n\n🔄 Alternative: Testing email functions directly...\n');
  
  // This would require compiling TypeScript first
  // For now, we'll use the API endpoint test above
  console.log('   Using API endpoint test instead (recommended)');
}

// Run tests
testEmailSystem().catch(console.error);

