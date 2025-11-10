// Direct test of email functions
// This requires the TypeScript to be compiled or using ts-node
// Run with: npx ts-node test-email-direct.ts (if you have ts-node)
// Or: node --loader ts-node/esm test-email-direct.ts

// For now, let's create a simpler Node.js test that uses the compiled JS
// Or we can test via the API endpoint

const testData = {
  name: 'Parker Case',
  email: 'info@stroomai.com', // Use your email for testing
  company: 'StroomAI',
  projectDescription: 'This is a test project brief to verify the email notification system. The project involves building a biochemical interaction platform that translates wearable biometric data into personalized nutrition protocols for elite athletes.',
  timeline: 'medium',
  stage: 'prototype',
  budgetRange: '20k-50k',
  complexity: 'medium',
  dataAvailability: 'have-data',
  engagementModel: 'commission-hourly',
  expectedDeliverables: 'Working prototype with API integration, real-time optimization engine, and comprehensive documentation'
};

const testAnalysis = {
  complexityScore: 7,
  estimatedHours: 150,
  hourRange: { min: 120, max: 180 },
  recommendedRate: 175,
  totalEstimate: { min: 21000, max: 31500 },
  riskFactors: [
    'Integration complexity with multiple wearable platforms',
    'Real-time data processing requirements may need optimization',
    'Biomarker validation requires clinical input'
  ],
  questions: [
    'What is the target athlete demographic?',
    'Are there specific compliance requirements (HIPAA, etc.)?',
    'What is the expected user base size at launch?'
  ],
  suitability: 'excellent',
  autoApprove: false,
  reasoning: 'This is a well-scoped project with clear requirements and existing data. The medium complexity and commission-hourly engagement model make it a good fit. The biochemical interaction focus aligns perfectly with StroomAI\'s expertise. The main considerations are the real-time processing requirements and multi-platform integration complexity.'
};

console.log('📧 Email System Test Data Prepared');
console.log('\nTo test the email functions:');
console.log('1. Start your Next.js dev server: npm run dev');
console.log('2. Use the API endpoint test: node test-email-system.js');
console.log('3. Or make a POST request to /api/submit-brief with the test data above');
console.log('\nTest data and analysis are ready in this file for manual testing.');

module.exports = { testData, testAnalysis };

