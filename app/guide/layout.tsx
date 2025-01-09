import { guideSource } from "@/src/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { docsOptions } from '@/app/layout.config';

import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions} tree={guideSource.pageTree}>{children}</DocsLayout>;
}
