import { blog, blogMeta, curation, curationMeta, guide, guideMeta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const guideSource = loader({
  baseUrl: '/guide',
  source: createMDXSource(guide, guideMeta),
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: createMDXSource(blog, blogMeta),
});

export const curationSource = loader({
  baseUrl: '/curation',
  source: createMDXSource(curation, curationMeta),
});
