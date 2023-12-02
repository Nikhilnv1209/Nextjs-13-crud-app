/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com','github.com','avatars.githubusercontent.com','unsplash.com'],
  },
}

module.exports = nextConfig
