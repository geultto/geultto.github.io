import { remarkStructure } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const { docs: guide, meta: guideMeta } = defineDocs({
  dir: "content/guide",
});

export const { docs: blog, meta: blogMeta } = defineDocs({
  dir: "content/blog",
});

export const { docs: curation, meta: curationMeta } = defineDocs({
  dir: "content/curation",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkStructure],
  },
});
