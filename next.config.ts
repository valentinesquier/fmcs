import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fitmass.school" }],
        destination: "https://www.fitmass.school/:path*",
        permanent: true,
      },
      {
        source: "/login",
        destination: "https://fmcs.mykajabi.com/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
