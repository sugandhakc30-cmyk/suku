
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add external domains here if you need to load remote images
    remotePatterns: []
  }
}
module.exports = nextConfig