"use client";

import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import GoogleAnalytics from '@/src/components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="글쓰는 또라이" />
        <meta name="keywords" content="글또, 글쓰는 또라이, 또라이, 글쓰기, 문서화" />
        <meta name="author" content="글또" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="og:title" content="글또" />
        <meta name="og:description" content="글쓰는 또라이" />
        <meta name="og:image" content="/geultto-social-card.png" />
        <meta name="og:url" content="https://geultto.github.io" />
        <meta name="og:site_name" content="글또" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@geultto" />
        <meta name="twitter:creator" content="@geultto" />
        <meta name="twitter:title" content="글또" />
        <meta name="twitter:description" content="글쓰는 또라이" />
        <meta name="twitter:image" content="/geultto-social-card.png" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-1QK15KQ7TH" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
