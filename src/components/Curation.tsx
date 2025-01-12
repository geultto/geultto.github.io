"use client";

import * as React from "react";

import type { CurationMetadata } from "@/schemas/curation";
import type { CurationYml, CurationContent } from "@/src/types/curation";
import type { Author, Authors } from "@/src/types/author";

import curationYml from "@/curation.yml";
import authorsYml from "@/authors.yml";
import curation10 from "@/__metadata__/curation-10.json";

type JobTitle = "PMPO" | "Frontend" | "Backend" | "Data" | "Fullstack" | "AIML" | "Infra";

interface CurationProps {
  /**
   * @default 10
   */
  기수?: number;
  회차: number;
  직군?: JobTitle;
}

/**
 * @example toOrdinal(1) // "1st"
 * @example toOrdinal(2) // "2nd"
 * @description Convert a number to an ordinal string.
 */
function toOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const CurationContext = React.createContext<{
  curation: CurationYml | null;
  authors: { [name: string]: Author } | null;
  metadata: CurationMetadata[] | null;
}>({
  curation: null,
  authors: null,
  metadata: null,
});

/**
 * @example
 * <Curation 회차={1} 기수={10} />
 */
export const Curation = ({ 회차, 기수 = 10, 직군 }: CurationProps) => {
  const ordinaled회차 = toOrdinal(회차);
  const ordinaled기수 = toOrdinal(기수);

  const curation = curationYml as CurationYml;
  const authors = authorsYml as Authors;
  const curationMetadatas = curation10 as CurationMetadata[];

  return (
    <CurationContext.Provider value={{ curation, authors, metadata: curationMetadatas }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {직군 ? (
          <>
            <h2 className="text-3xl font-bold mb-4 col-span-full">{직군}</h2>
            {curation[ordinaled기수]?.[ordinaled회차]?.[직군]?.map((content) => (
              <Content key={content.제목} {...content} />
            ))}
          </>
        ) : (
          <>
            {Object.entries(curation[ordinaled기수]?.[ordinaled회차]).map(([jobTitle, contents]) => (
              <div key={jobTitle} className="col-span-full">
                <h2 className="text-3xl font-bold mb-4">{jobTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contents.map((content) => (
                    <Content key={content.제목} {...content} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </CurationContext.Provider>
  );
};

const Content = (props: CurationContent) => {
  const { 제목, 주소, 작가, 설명 } = props;
  const authors = React.useContext(CurationContext).authors;
  const metadata = React.useContext(CurationContext).metadata as CurationMetadata[];
  const author = authors?.[작가];
  const thumbnail = metadata?.find((m) => m.originalTitle === 제목)?.ogImage;

  return (
    <a href={주소} target="_blank" rel="noreferrer" className="no-underline">
      <div className="flex flex-col h-full rounded-xl transition-all hover:shadow-sm border border-gray-100 dark:border-gray-900">
        {/* 썸네일 이미지 */}
        {thumbnail ? (
          <div className="aspect-[4/3] w-full h-full max-h-[243px]">
            <img className="w-full h-full object-cover rounded-xl m-0" src={thumbnail} alt={제목} draggable={false} />
          </div>
        ) : (
          <div className="aspect-[4/3] w-full h-full bg-gray-100 dark:bg-gray-900 rounded-xl p-4 max-h-[243px]">
            <div className="flex justify-center items-center w-full h-full text-gray-500 dark:text-gray-400 text-sm">
              {제목}
            </div>
          </div>
        )}

        {/* 컨텐츠 */}
        <div className="flex flex-col px-4 mt-4 mb-4">
          <h3 className="text-xl font-bold mb-2 mt-2">{제목}</h3>
          <p className="text-gray-600 text-sm">{설명}</p>

          {/* 작가 정보 */}
          {author ? (
            <div className="flex items-center h-8">
              <img
                className="w-8 h-8 object-cover overflow-hidden rounded-full border-white"
                src={author.image_url}
                alt={author.name}
              />
              <span className="text-sm text-gray-500 ml-2">{author?.name || 작가}</span>
            </div>
          ) : (
            <span className="text-gray-500 text-sm">{작가}</span>
          )}
        </div>
      </div>
    </a>
  );
};
