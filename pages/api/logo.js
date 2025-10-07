import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const logoPath = path.join(
      process.cwd(),
      "public",
      "new-logo-logo-only-240x240.png"
    );

    // Check if file exists
    if (!fs.existsSync(logoPath)) {
      return res.status(404).json({ error: "Logo not found" });
    }

    // Read the file
    const logoBuffer = fs.readFileSync(logoPath);

    // Set appropriate headers
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Length", logoBuffer.length);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable"); // Cache for 1 year

    // Send the image
    res.status(200).send(logoBuffer);
  } catch (error) {
    console.error("Error serving logo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
