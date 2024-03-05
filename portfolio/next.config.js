/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: [
      'i.imgur.com',
      'cdn.discordapp.com',
      'titanvtc.com',
      'gallery.titanvtc.com'
    ],
  },
}

