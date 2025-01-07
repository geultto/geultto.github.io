import { mdxComponents } from "@/src/components/mdx-components";
import { curationSource } from "@/src/lib/source";
import { MDXContent } from '@content-collections/mdx/react';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = curationSource.getPage(params.slug);
  if (!page) notFound();

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
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
  return curationSource.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = curationSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
