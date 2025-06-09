import { createFromSource } from 'fumadocs-core/search/server';
import { docsSource, blogSource, curationSource } from '@/src/lib/source';


// 통합 소스 정의
const mergedSource = {
  getPages() {
    const allPages = [
      ...docsSource.getPages(),
      ...blogSource.getPages(),
      ...curationSource.getPages(),
    ];
    
    return allPages;
  },

  getLanguages() {
    const pages = this.getPages();

    return [
      {
        language: 'ko',
        name: '한국어',
        pages,
      },
    ];
  },

  pageTree: {
    name: 'Root',
    children: [
      ...(docsSource.pageTree?.children || []),
      ...(blogSource.pageTree?.children || []),
      ...(curationSource.pageTree?.children || []),
    ],
  },

  getPage(slugs: string[] = []) {
    return (
      docsSource.getPage(slugs) ??
      blogSource.getPage(slugs) ??
      curationSource.getPage(slugs)
    );
  },

  getNodePage(node: any) {
    return (
      docsSource.getNodePage?.(node) ??
      blogSource.getNodePage?.(node) ??
      curationSource.getNodePage?.(node)
    );
  },

  getNodeMeta(node: any) {
    return (
      docsSource.getNodeMeta?.(node) ??
      blogSource.getNodeMeta?.(node) ??
      curationSource.getNodeMeta?.(node)
    );
  },

  generateParams<TSlug extends string = 'slug'>(slug?: TSlug) {
    const results = [
      ...docsSource.generateParams(slug),
      ...blogSource.generateParams(slug),
      ...curationSource.generateParams(slug),
    ];
    
    return results as any;
  },
};



const koreanEnglishTokenizer = {
  language: "ko-en",
  normalizationCache: new Map<string, string>(),
  tokenize: (text: string) => {
    return text
      .normalize("NFC")
      .split(/[\s.,!?~\-–—()\[\]{}"“”‘’'`:;]+/)
      .filter(Boolean)
      .map(token => token.toLowerCase()); // 영어 소문자화 추가
  }
};

export const revalidate = false;


export const { staticGET: GET } = createFromSource(mergedSource, undefined,{
  tokenizer: koreanEnglishTokenizer, // ← 이건 허용됨
  search: {
    mode: "fulltext"
  }
});