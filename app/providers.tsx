"use client";

import GoogleAnalytics from "@/src/components/GoogleAnalytics";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from 'next/dynamic';

import type { ReactNode } from 'react';

const SearchDialog = dynamic(() => import('@/src/components/Search'));

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-1QK15KQ7TH" />
      <RootProvider 
        search={{
          SearchDialog
        }}
      >
        {children}
      </RootProvider>
    </>
  );
}