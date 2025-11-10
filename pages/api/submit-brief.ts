// pages/api/submit-brief.ts
import Anthropic from "@anthropic-ai/sdk";
import * as emailLib from "../../lib/email";
import { storeProjectBrief } from "../../lib/storage";
import type { NextApiRequest, NextApiResponse } from "next";

const { sendApprovalEmail, sendClientConfirmation } = emailLib;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

interface ProjectBriefData {
  name: string;
  email: string;
  company?: string;
  projectDescription: string;
  timeline: string;
  stage: string;
  budgetRange: string;
  dataAvailability: string;
  engagementModel: string;
  expectedDeliverables: string;
}

// Spam detection function - Only catches obvious spam/scam phrases
function detectSpam(data: ProjectBriefData) {
  const { name, email, projectDescription, expectedDeliverables } = data;

  // Check 1: Email validation (basic check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isSpam: true, reason: "Invalid email" };
  }

  // Check 2: Only flag obvious spam/scam phrases (not legitimate business terms)
  const spamPhrases = [
    "nigerian prince",
    "congratulations you won",
    "claim your prize",
    "act now limited time",
    "make money fast",
    "work from home earn",
    "click here now",
    "buy now limited",
    "free money guarantee",
    "get rich quick",
    "viagra",
    "casino",
    "lottery winner",
  ];

  const lowerText =
    `${name} ${projectDescription} ${expectedDeliverables}`.toLowerCase();

  // Only flag if multiple spam phrases found or very obvious spam
  const spamMatches = spamPhrases.filter((phrase) =>
    lowerText.includes(phrase)
  );
  if (spamMatches.length >= 2) {
    return { isSpam: true, reason: "Spam phrases detected" };
  }

  // Check 3: Excessive links (more than 5 is suspicious)
  const urlCount = (lowerText.match(/https?:\/\//g) || []).length;
  if (urlCount > 5) {
    return { isSpam: true, reason: "Too many URLs" };
  }

  // Check 4: Extreme gibberish (very strict - only obvious nonsense)
  // Only flag if there are 10+ repeated characters in a row
  if (/(.)\1{10,}/i.test(lowerText)) {
    return { isSpam: true, reason: "Gibberish detected" };
  }

  // All other checks removed - let legitimate submissions through
  return { isSpam: false };
}

// Claude analysis function
async function analyzeProjectBrief(data: ProjectBriefData) {
  const prompt = `You are an expert project analyst for a biochemical AI consultant. Analyze this project brief and provide a structured assessment.

PROJECT BRIEF:
Name: ${data.name}
Company: ${data.company || "Not provided"}
Email: ${data.email}

Project Description:
${data.projectDescription}

Project Stage: ${data.stage}
Timeline: ${data.timeline}
Data Availability: ${data.dataAvailability}
Expected Deliverables: ${data.expectedDeliverables}
Preferred Engagement: ${data.engagementModel}
Budget Range: ${data.budgetRange}

NOTE: You must determine the technical complexity based on the project description and requirements. Do not rely on user input for complexity.

Please analyze this and return a JSON object with:
{
  "complexityScore": <1-10>,
  "estimatedHours": <number>,
  "hourRange": {
    "min": <number>,
    "max": <number>
  },
  "recommendedRate": <number per hour>,
  "recommendedEngagementModel": <"hourly" | "commission-hourly" | "equity-commission">,
  "totalEstimate": {
    "min": <number>,
    "max": <number>
  },
  "riskFactors": [<array of potential risks or challenges>],
  "questions": [<array of clarifying questions to ask>],
  "suitability": <"excellent" | "good" | "moderate" | "poor">,
  "autoApprove": <boolean - true if straightforward project under $15k>,
  "reasoning": "<brief explanation of your assessment including why you recommended the engagement model>"
}

IMPORTANT: Based on the project details, budget range, and company stage, recommend the BEST engagement model:
- "hourly": For established companies with clear budgets, simple projects, or one-off work
- "commission-hourly": For growth-stage companies, recurring revenue potential, or when client wants shared risk/reward
- "equity-commission": For early-stage startups, high-growth potential, or when client has limited cash but strong equity value

Consider:
- Budget range (lower budgets may need commission/equity models)
- Company stage (startups vs established)
- Project complexity (complex projects may benefit from shared risk)
- Revenue potential (if project could generate ongoing revenue, commission model makes sense)

COMPLEXITY DETERMINATION (You must assess this yourself):
Analyze the project description, deliverables, stage, and technical requirements to determine complexity:
- Simple (1-3): Single-platform, clear requirements, existing tech, straightforward implementation
- Medium (4-6): Multi-system integration, some R&D needed, proven approaches with customization
- Complex (7-8): Novel research, multiple unknowns, patents needed, cutting-edge technology
- Flag for review (9-10): Unprecedented scope, IP concerns, highly experimental

Base your complexity score on:
- Number of systems/platforms involved
- Novelty of the approach
- Research and development requirements
- Technical unknowns and risks
- Integration complexity

RATE CALCULATION:
- Simple: $100-150/hr
- Medium: $150-200/hr  
- Complex: $200-250/hr

Adjust rates DOWN if equity/commission is involved:
- Hourly only: Full rate
- Commission + Hourly: -25% hourly rate
- Equity + Commission: -50% hourly rate

AUTO-APPROVE if:
- Total estimate under $15,000
- Hourly-only engagement
- Complexity score 6 or lower
- Clear scope and deliverables
- No equity requests over 5%

Otherwise flag for manual review.`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      temperature: 0.3,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = response.content[0];
    if (content.type === "text") {
      // Extract JSON from response - handle both code blocks and plain JSON
      let jsonText = content.text;

      // Remove markdown code blocks if present
      jsonText = jsonText
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      // Try to find JSON object
      const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const parsed = JSON.parse(jsonMatch[0]);
          // Ensure recommendedEngagementModel exists
          if (!parsed.recommendedEngagementModel) {
            // Default based on budget and complexity
            if (
              data.budgetRange === "under-5k" ||
              data.budgetRange === "5k-10k"
            ) {
              parsed.recommendedEngagementModel = "commission-hourly";
            } else if (parsed.complexityScore >= 7) {
              parsed.recommendedEngagementModel = "commission-hourly";
            } else {
              parsed.recommendedEngagementModel =
                data.engagementModel || "hourly";
            }
          }
          return parsed;
        } catch (parseError) {
          console.error("JSON parse error:", parseError);
          console.error("Raw response:", content.text);
          throw new Error("Failed to parse Claude JSON response");
        }
      }
    }

    throw new Error("Failed to parse Claude response - no JSON found");
  } catch (error) {
    console.error("Claude analysis error:", error);
    // Return a fallback analysis if Claude fails
    if (error instanceof Error && error.message.includes("API key")) {
      throw new Error("Anthropic API key not configured");
    }
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const data = req.body as ProjectBriefData;

    // Spam detection
    const spamCheck = detectSpam(data);
    if (spamCheck.isSpam) {
      console.log("Spam detected:", spamCheck.reason);
      // Return success to not alert spammer, but don't process
      return res.status(200).json({
        success: true,
        spam: true,
      });
    }

    // Claude analysis with timeout
    let analysis;
    try {
      analysis = await Promise.race([
        analyzeProjectBrief(data),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Claude analysis timeout")), 45000)
        ),
      ]);
    } catch (analysisError) {
      console.error("Claude analysis error:", analysisError);
      // Return error but don't crash - let user know there was an issue
      return res.status(500).json({
        error:
          "Analysis service is temporarily unavailable. Please try again in a moment.",
      });
    }

    // Send email notifications (non-blocking)
    Promise.all([
      sendApprovalEmail(data, analysis).catch((err) => {
        console.error("Approval email error:", err);
      }),
      sendClientConfirmation(data).catch((err) => {
        console.error("Confirmation email error:", err);
      }),
    ]).catch(() => {
      // Emails failed but continue
    });

    // Store submission (non-blocking)
    const ipAddress =
      req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
      req.headers["x-real-ip"]?.toString() ||
      req.socket?.remoteAddress ||
      "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";

    storeProjectBrief(data, analysis, { ipAddress, userAgent }).catch((err) => {
      console.error("Storage error:", err);
      // Continue even if storage fails
    });

    // Return success immediately
    return res.status(200).json({
      success: true,
      spam: false,
      analysis: {
        estimatedHours: analysis.estimatedHours,
        totalEstimate: analysis.totalEstimate,
        recommendedEngagementModel:
          analysis.recommendedEngagementModel || data.engagementModel,
        complexityScore: analysis.complexityScore,
        timeline: "48 hours for proposal",
      },
    });
  } catch (error) {
    console.error("Error processing brief:", error);
    return res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Failed to process submission. Please try again.",
    });
  }
}

