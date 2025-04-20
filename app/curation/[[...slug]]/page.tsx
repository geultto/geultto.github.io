import { mdxComponents } from "@/src/components/mdx-components";
import { curationSource } from "@/src/lib/source";
import { MDXContent } from "@content-collections/mdx/react";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";
import Author from "@/src/components/Author";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function Page(props: any) {
  const { slug } = props.params as { slug?: string[] };
  const page = curationSource.getPage(slug);
  if (!page) notFound();

  const authors = page.data.authors || [];

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {page.data.updatedAt ? (
        <span className="text-sm text-gray-500">해당 글은 {page.data.updatedAt}에 수정되었습니다.</span>
      ) : page.data.createdAt ? (
        <span className="text-sm text-gray-500">해당 글은 {page.data.createdAt}에 작성되었습니다.</span>
      ) : null}
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
  return curationSource.generateParams();
}

// NOTE: This is a workaround to fix the type error.
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function generateMetadata(props: any) {
  const { slug } = props.params as { slug?: string[] };
  const page = curationSource.getPage(slug);
  if (!page) notFound();

  const title = page.data.title;
  const description = page.data.description;
  const url = `https://geultto.github.io/curation/${slug?.join("/") || ""}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "글또",
      type: "article",
      images: [
        {
          url: "https://geultto.github.io/geultto-social-card.png",
          width: 1200,
          height: 630,
          alt: "글또 소셜 카드",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://geultto.github.io/geultto-social-card.png"],
    },
  } satisfies Metadata;
}
