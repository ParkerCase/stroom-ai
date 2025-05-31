// lib/email.js (Email utilities)
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/[<>]/g, "")
    .trim();
};

export const formatProjectInterest = (interest) => {
  const projectMap = {
    "ai-stylist": "AI Personal Stylist",
    "knowledge-dashboard": "AI Knowledge Dashboard",
    "eco-scraper": "EcoScraper Pro",
    "mental-space": "MentalSpace Platform",
    custom: "Custom AI Solution",
    consultation: "General Consultation",
  };

  return projectMap[interest] || "Not specified";
};
