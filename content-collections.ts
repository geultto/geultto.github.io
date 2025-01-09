import { defineCollection, defineConfig } from '@content-collections/core';
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
} from '@fumadocs/content-collections/configuration';

// 블로그 컬렉션
const blog = defineCollection({
  name: 'blog',
  directory: 'content/blog',
  include: '**/*.mdx',
  schema: (z) => {
    return {
      ...createDocSchema(z),
      authors: z.array(z.string()).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }
  },
  transform: transformMDX,
});

const blogMeta = defineCollection({
  name: 'blogMeta',
  directory: 'content/blog',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema,
});

// 가이드 컬렉션
const guide = defineCollection({
  name: 'guide',
  directory: 'content/guide',
  include: '**/*.mdx',
  schema: (z) => {
    return {
      ...createDocSchema(z),
      authors: z.array(z.string()).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }
  },
  transform: transformMDX,
});

const guideMeta = defineCollection({
  name: 'guideMeta', 
  directory: 'content/guide',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema,
});

// 큐레이션 컬렉션
const curation = defineCollection({
  name: 'curation',
  directory: 'content/curation',
  include: '**/*.mdx',
  schema: (z) => {
    return {
      ...createDocSchema(z),
      authors: z.array(z.string()).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }
  },
  transform: transformMDX,
});

const curationMeta = defineCollection({
  name: 'curationMeta',
  directory: 'content/curation',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [
    blog, 
    blogMeta,
    guide,
    guideMeta, 
    curation,
    curationMeta
  ],
});