/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{loader:'@svgr/webpack',options:{typescript:true,ext:'tsx'}}],
    });

    return config;
  },
};

export default nextConfig;