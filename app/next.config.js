/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    PORT: process.env.PORT,
    CENTRAL_DOGMA_ID: process.env.CENTRAL_DOGMA_ID,
    FACADE_API_KEY: process.env.FACADE_API_KEY,
  },
}

module.exports = nextConfig
