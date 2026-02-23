/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/portofoliobaru",
  assetPrefix: "/portofoliobaru/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;