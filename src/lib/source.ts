import { createMDXSource } from '@fumadocs/content-collections';
import { loader } from 'fumadocs-core/source';
import { allBlogs, allBlogMetas, allDocs, allDocsMetas, allCurations, allCurationMetas } from '.content-collections/generated';

export const docsSource = loader({
  baseUrl: '/docs',
  source: createMDXSource(allDocs, allDocsMetas),
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: createMDXSource(allBlogs, allBlogMetas),
});

export const curationSource = loader({
  baseUrl: '/curation',
  source: createMDXSource(allCurations, allCurationMetas),
});
