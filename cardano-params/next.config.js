/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure we're not using static exports
  output: 'standalone',
  // Enable React strict mode for better error catching
  reactStrictMode: true,
  // Disable image optimization during development
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig 