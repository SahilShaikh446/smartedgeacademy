/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "smartedgegroup.in" },
      { hostname: "academy.smartedgegroup.in" },
    ],
  },
}

export default nextConfig
