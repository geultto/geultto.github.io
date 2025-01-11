import { docsSource } from '@/src/lib/source';
import type { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'next/link';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    children: <img src="/logo.svg" alt="logo" className="w-[32px]" draggable={false} />,
  },
  links: [
    {
      text: '가이드 문서',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: "블로그",
      url: "/blog",
      active: "nested-url",
    },
    {
      text: "큐레이션",
      url: "/curation",
      active: "nested-url",
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  tree: docsSource.pageTree,
  nav: {
    children: (
      <Link href="/">
        <img src="/logo.svg" alt="logo" className="w-[32px]" draggable={false} />
      </Link>
    ),
  },
  sidebar: {
    tabs: [
      {
        title: "가이드 문서",
        url: "/docs",
      },
      {
        title: "블로그",
        url: "/blog",
      },
      {
        title: "큐레이션",
        url: "/curation",
      },
    ]
  },
};
