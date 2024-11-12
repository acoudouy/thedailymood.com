
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `https://blog.minty.so/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://blog.minty.so/blog/:path*`,
      },
      {
        source: '/:path*',
        destination: `/:path*`,
      },
    ]
  },
}

export default nextConfig
