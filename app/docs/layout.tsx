import { docsSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { docsOptions } from '@/app/layout.config';

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions} tree={docsSource.pageTree}>{children}</DocsLayout>;
}
