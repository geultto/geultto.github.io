import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "글또 - 글쓰는 또라이가 세상을 바꾼다",
  description: "글쓰는 개발자 모임, 글또입니다",
  keywords: ["글또", "개발자", "글쓰기", "기술 블로그"],
  authors: [{ name: "글또", url: "https://geultto.github.io" }],
  openGraph: {
    title: "글또 - 글쓰는 또라이가 세상을 바꾼다",
    description: "글쓰는 개발자 모임, 글또입니다",
    url: "https://geultto.github.io",
    siteName: "글또",
    images: [
      {
        url: "https://geultto.github.io/geultto-social-card.png",
        width: 1200,
        height: 630,
        alt: "글또 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "글또 - 글쓰는 또라이가 세상을 바꾼다",
    description: "글쓰는 개발자 모임, 글또입니다",
    site: "@geultto",
    creator: "@geultto",
    images: ["https://geultto.github.io/geultto-social-card.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
