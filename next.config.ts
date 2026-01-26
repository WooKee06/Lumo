// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sun9-14.userapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "e-cdns-images.dzcdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
