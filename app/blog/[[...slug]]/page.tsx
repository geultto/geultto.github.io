import { mdxComponents } from "@/src/components/mdx-components";
import { blogSource } from "@/src/lib/source";
import { MDXContent } from '@content-collections/mdx/react';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import Author from "@/src/components/Author";

export default function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const authors = page.data.authors || [];
  
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <span className="text-sm text-gray-500">해당 글은 {page.data.createdAt}에 작성되었습니다.</span>
      <div className="flex gap-4">
        {authors.map((author) => (
          <Author key={author} name={author} />
        ))}
      </div>
      <DocsBody>
        <MDXContent
          code={page.data.body}
          components={{ ...mdxComponents as MDXComponents }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = blogSource.getPage(params.slug);
  
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
