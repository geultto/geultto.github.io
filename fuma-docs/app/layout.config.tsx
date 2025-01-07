import { guideSource } from '@/src/lib/source';
import type { DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: '글또',
  },
  links: [
    {
      text: '가이드',
      url: '/guide',
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
  tree: guideSource.pageTree,
  nav: {
    title: "글또",
  },
  sidebar: {
    tabs: [
      {
        title: "블로그",
        url: "/blog",
      },
      {
        title: "큐레이션",
        url: "/curation",
      },
      {
        title: "가이드",
        url: "/guide",
      },
    ]
  },
};
