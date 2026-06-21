import type { NextConfig } from "next";

const repoName = "rdt-website";
const isProd = process.env.NODE_ENV === "production";
// Set GITHUB_PAGES=1 when running `npm run build` before deploy so assets use root paths
const isGitHubPages = process.env.GITHUB_PAGES === "1";
const basePath = isGitHubPages ? "" : isProd ? `/${repoName}` : "";
const assetPrefix = isGitHubPages ? "" : isProd ? `/${repoName}/` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
