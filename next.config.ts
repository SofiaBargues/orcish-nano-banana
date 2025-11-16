import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    domains: [],
  },
  serverExternalPackages: ["fs"],
};

export default nextConfig;
