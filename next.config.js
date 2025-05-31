/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    logging: {
      level: "verbose",
    },
  },
  images: {
    domains: ["parkercase.co"],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
