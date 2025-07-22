import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    fulfilmentUrl: process.env.NEXT_PUBLIC_FULFILMENT_URL,
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
