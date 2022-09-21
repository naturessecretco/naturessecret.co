/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
}

module.exports = nextConfig
