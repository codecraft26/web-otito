import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all HTTPS domains
      },
      {
        protocol: "http",
        hostname: "**", // (optional) allow all HTTP domains
      },
    ],
  },
};

export default nextConfig;
