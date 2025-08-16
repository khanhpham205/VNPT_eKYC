import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.example.com",
      "images.unsplash.com",
      "facebook.com",
      "anotherdomain.com",
      "scontent.fsgn8-4.fna.fbcdn.net",
      "be.sunnyhill.io.vn",
      "localhost", // Cho phép lấy ảnh từ localhost
      "127.0.0.1", // Nếu BE chạy bằng IP
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "9000",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        encoding: false,
        path: false,
        os: false,
        stream: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
