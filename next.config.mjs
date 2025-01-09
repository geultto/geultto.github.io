import { withContentCollections } from '@content-collections/next';

// const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default withContentCollections(config);
