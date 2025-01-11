import { docsOptions } from '@/app/layout.config';
import { blogSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions} tree={blogSource.pageTree}>{children}</DocsLayout>;
}
