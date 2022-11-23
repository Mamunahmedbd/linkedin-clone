/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rb.gy",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "careerdirectors.com",
      },
    ],
  },
};
// https://rb.gy/vkzpzt
// https://careerdirectors.com/wp-content/uploads/2022/06/OTW-graphic-for-article.png

module.exports = nextConfig;
