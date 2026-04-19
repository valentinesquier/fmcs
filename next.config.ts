import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://fmcs.mykajabi.com/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
