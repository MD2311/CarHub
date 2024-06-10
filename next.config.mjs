/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        pathname: "**", // This allows all paths under this domain
      },
    ],
  },
};

export default nextConfig;
