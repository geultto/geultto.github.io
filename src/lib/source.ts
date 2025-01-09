import { createMDXSource } from '@fumadocs/content-collections';
import { loader } from 'fumadocs-core/source';
import { allBlogs, allBlogMetas, allGuides, allGuideMetas, allCurations, allCurationMetas } from '.content-collections/generated';

export const guideSource = loader({
  baseUrl: '/guide',
  source: createMDXSource(allGuides, allGuideMetas),
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: createMDXSource(allBlogs, allBlogMetas),
});

export const curationSource = loader({
  baseUrl: '/curation',
  source: createMDXSource(allCurations, allCurationMetas),
});
