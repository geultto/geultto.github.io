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
      {직군 ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{직군}</h2>
          {curation[ordinaled기수]?.[ordinaled회차]?.[직군]?.map((content) => (
            <Content key={content.제목} {...content} />
          ))}
        </>
      ) : (
        <>
          {Object.entries(curation[ordinaled기수]?.[ordinaled회차]).map(([jobTitle, contents]) => (
            <div key={jobTitle} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{jobTitle}</h2>
              {contents.map((content) => (
                <Content key={content.제목} {...content} />
              ))}
            </div>
          ))}
        </>
      )}
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
      <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      {author ? (
        <>
          <div className="flex items-center gap-2 mb-2">
            <img 
              className="w-8 h-8 rounded-full object-cover"
              src={author.image_url} 
              alt={author.name} 
            />
            <a 
              href={author.url}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank" 
              rel="noreferrer"
            >
              {author.name}
            </a>
            <span>님의</span>
          </div>
          <a 
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors block mb-2"
            href={주소} 
            target="_blank" 
            rel="noreferrer"
          >
            {제목}
          </a>
          {thumbnail && (
            <img 
              className="w-full h-48 object-cover rounded-md mb-2"
              src={thumbnail} 
              alt={author.name} 
            />
          )}
          <p className="text-gray-600">{설명}</p>
        </>
      ) : (
        <>
          <span className="block mb-2">{작가}님의</span>
          <a 
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors block mb-2"
            href={주소} 
            target="_blank" 
            rel="noreferrer"
          >
            {제목}
          </a>
          <p className="text-gray-600">{설명}</p>
        </>
      )}
    </div>
  );
};
