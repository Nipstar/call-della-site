import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // One URL form: no trailing slash. Cloudflare 301s the other form.
  trailingSlash: false,
};

export default nextConfig;
