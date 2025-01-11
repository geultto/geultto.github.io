import { mdxComponents } from "@/src/components/mdx-components";
import { blogSource } from "@/src/lib/source";
import { MDXContent } from "@content-collections/mdx/react";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import Author from "@/src/components/Author";
import { Badge } from "@/src/components/ui/badge";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function Page(props: any) {
  const { slug } = props.params as { slug?: string[] };
  const page = blogSource.getPage(slug);
  if (!page) notFound();

  const authors = page.data.authors || [];

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex items-center gap-2">
        {page.data.updatedAt ? (
          <span className="text-sm text-gray-500">{page.data.updatedAt} updated</span>
        ) : page.data.createdAt ? (
          <span className="text-sm text-gray-500">{page.data.createdAt}</span>
        ) : null}
        {page.data.tags?.map((tag) => (
          <Badge variant="secondary" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4">
        {authors.map((author) => (
          <Author key={author} name={author} />
        ))}
      </div>
      <DocsBody>
        <MDXContent code={page.data.body} components={{ ...(mdxComponents as MDXComponents) }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

// NOTE: This is a workaround to fix the type error.
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function generateMetadata(props: any) {
  const { slug } = props.params as { slug?: string[] };
  const page = blogSource.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
