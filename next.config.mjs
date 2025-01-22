import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "6wopiao8ao.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
