import { withContentCollections } from '@content-collections/next';

// const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default withContentCollections(config);
