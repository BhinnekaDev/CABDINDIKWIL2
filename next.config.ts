import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "osixzpbdlzxhdjriwyvw.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/Beranda",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
