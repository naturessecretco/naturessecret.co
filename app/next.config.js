/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    PORT: process.env.PORT,
  },
}

module.exports = nextConfig
