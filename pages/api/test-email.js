// Test endpoint for email system
// Access at: http://localhost:3002/api/test-email

import { sendApprovalEmail, sendClientConfirmation } from '../../lib/email';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Allow testing in development (you can add auth later for production)
  if (process.env.NODE_ENV === 'production' && !process.env.ALLOW_EMAIL_TEST) {
    return res.status(401).json({ 
      error: 'Unauthorized',
      message: 'Email testing disabled in production'
    });
  }

  console.log('🧪 Starting email system test...');

  const testData = {
    name: req.body.name || 'Test User',
    email: req.body.email || 'info@stroomai.com', // Change this to your email
    company: req.body.company || 'Test Company',
    projectDescription: req.body.projectDescription || 'This is a test project brief to verify the email notification system is working correctly. The project involves building a biochemical interaction platform for personalized recommendations.',
    timeline: req.body.timeline || 'medium',
    stage: req.body.stage || 'prototype',
    budgetRange: req.body.budgetRange || '20k-50k',
    complexity: req.body.complexity || 'medium',
    dataAvailability: req.body.dataAvailability || 'have-data',
    engagementModel: req.body.engagementModel || 'commission-hourly',
    expectedDeliverables: req.body.expectedDeliverables || 'Working prototype, API integration, documentation'
  };

  const testAnalysis = {
    complexityScore: req.body.complexityScore || 6,
    estimatedHours: req.body.estimatedHours || 120,
    hourRange: { 
      min: req.body.hourRangeMin || 100, 
      max: req.body.hourRangeMax || 150 
    },
    recommendedRate: req.body.recommendedRate || 150,
    totalEstimate: { 
      min: req.body.totalEstimateMin || 15000, 
      max: req.body.totalEstimateMax || 22500 
    },
    riskFactors: req.body.riskFactors || [
      'Data quality may need validation',
      'Integration complexity with existing systems'
    ],
    questions: req.body.questions || [
      'What is the expected user base size?',
      'Are there any compliance requirements?'
    ],
    suitability: req.body.suitability || 'good',
    autoApprove: req.body.autoApprove || false,
    reasoning: req.body.reasoning || 'This is a well-scoped project with clear requirements. The medium complexity and existing data availability make it a good fit. The commission-hourly model aligns well with the growth-stage company profile.'
  };

  const results = {
    approvalEmail: null,
    clientEmail: null,
    errors: []
  };

  // Test approval email
  console.log('📧 Testing approval email...');
  try {
    const approvalResult = await sendApprovalEmail(testData, testAnalysis);
    results.approvalEmail = approvalResult;
    if (approvalResult.success) {
      console.log('✅ Approval email sent successfully');
    } else {
      console.error('❌ Approval email failed:', approvalResult.error);
      results.errors.push(`Approval email: ${approvalResult.error}`);
    }
  } catch (error) {
    console.error('❌ Approval email error:', error);
    results.errors.push(`Approval email: ${error.message}`);
    results.approvalEmail = { success: false, error: error.message };
  }

  // Test client confirmation email
  console.log('📧 Testing client confirmation email...');
  try {
    const clientResult = await sendClientConfirmation(testData);
    results.clientEmail = clientResult;
    if (clientResult.success) {
      console.log('✅ Client confirmation email sent successfully');
    } else {
      console.error('❌ Client confirmation email failed:', clientResult.error);
      results.errors.push(`Client email: ${clientResult.error}`);
    }
  } catch (error) {
    console.error('❌ Client confirmation email error:', error);
    results.errors.push(`Client email: ${error.message}`);
    results.clientEmail = { success: false, error: error.message };
  }

  // Return results
  const allSuccess = results.approvalEmail?.success && results.clientEmail?.success;
  
  return res.status(allSuccess ? 200 : 207).json({
    success: allSuccess,
    message: allSuccess 
      ? '✅ Both emails sent successfully! Check your inboxes.'
      : '⚠️ Some emails failed. Check the results below.',
    results,
    testData: {
      approvalEmailTo: 'info@stroomai.com',
      clientEmailTo: testData.email,
    },
    timestamp: new Date().toISOString()
  });
}

