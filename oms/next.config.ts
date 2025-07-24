import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  experimental: {
    externalDir: true,
  },
  publicRuntimeConfig: {
    fulfilmentUrl: process.env.NEXT_PUBLIC_FULFILMENT_URL || "http://localhost:3002",
    posventaUrl: process.env.NEXT_PUBLIC_POSVENTA_URL || "http://localhost:3001",
  },

  // This is just a PoC, disabling eslint/ts for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
