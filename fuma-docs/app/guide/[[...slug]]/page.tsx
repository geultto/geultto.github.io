import { mdxComponents } from "@/src/components/mdx-components";
import { guideSource } from "@/src/lib/source";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  console.log("params.slug", params.slug);
  
  const page = guideSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={mdxComponents as MDXComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return guideSource.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = guideSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
