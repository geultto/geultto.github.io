import { withContentCollections } from '@content-collections/next';

// const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
};

export default withContentCollections(config);
