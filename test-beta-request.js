// test-beta-request.js - Run this to test the beta request functionality
const testBetaRequest = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com", // You can change this to your email to test
    company: "Test Company Inc",
    selectedPlatforms: ["MeridianAI", "HygeiaAI"],
    notes: "This is a test beta request to verify the form is working correctly."
  };

  try {
    const response = await fetch("http://localhost:3000/api/beta-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log("✅ Beta request test successful!");
      console.log("Response:", result);
    } else {
      console.log("❌ Beta request test failed:");
      console.log("Error:", result);
    }
  } catch (error) {
    console.error("❌ Network error during test:", error);
  }
};

// Uncomment the line below to run the test
// testBetaRequest();

console.log("Beta request test ready. Uncomment the last line to run the test.");
console.log("Make sure your Next.js dev server is running first with: npm run dev");
console.log("Then visit: http://localhost:3000/beta to test the full page");
