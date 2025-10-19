import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/delivery',
        destination: '/delivery-and-takeout',
        permanent: true,
      },
      {
        source: '/takeout',
        destination: '/delivery-and-takeout',
        permanent: true,
      },
    ]
  },
  
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // This allows any path from placehold.co
      },
    ],
  },
};

export default nextConfig;
