import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    domains: [],
  },
  experimental: {
    serverComponentsExternalPackages: ["fs"],
  },
};

export default nextConfig;
