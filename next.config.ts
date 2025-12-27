import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - generates pure HTML/CSS/JS without React hydration
  output: "export",
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    // Remove console.log in production to reduce bundle size
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable React strict mode for better optimization hints
  reactStrictMode: true,
};

export default nextConfig;
