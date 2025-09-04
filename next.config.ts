/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  // basePath: '/meher', // your repo name
  // assetPrefix: '/out',
  images: {
    unoptimized: true,
  },
  eslint : {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
