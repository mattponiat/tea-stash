/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
    loader: "imgix",
    path: "",
  },
};
