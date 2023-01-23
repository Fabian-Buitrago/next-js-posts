/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["https://avatars.dicebear.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
