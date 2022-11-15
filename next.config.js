/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-519dfc423646485c8e75fc48e6df6ae7.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
