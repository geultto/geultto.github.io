import { mdxComponents } from "@/src/components/mdx-components";
import { blogSource } from "@/src/lib/source";
import { MDXContent } from '@content-collections/mdx/react';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";

export default function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  console.log(params);
  
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const authors = page.data.authors || [];
  console.log("authors", authors);
  
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {authors.map((author) => (
        <div key={author}>{author}</div>
      ))}
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
  console.log("page?.data", page?.data);
  console.log("page", page);
  const authors = page.data.authors || [];

  console.log("authors", authors);
  

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
