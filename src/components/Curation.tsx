import * as React from "react";

import yaml from "yaml";

import styles from "./Curation.module.css";
import type { CurationMetadata } from "@site/schemas/curation";

export interface CurationContent {
  제목: string;
  주소: string;
  작가: string;
  직군: string;
  설명: string;
}

type JobTitle = "PMPO" | "Frontend" | "Backend" | "Data" | "Fullstack" | "AIML" | "Infra";

export interface CurationYml {
  [글또기수: string]: {
    [회차: string]: {
      AIML: CurationContent[];
      PMPO: CurationContent[];
      Frontend: CurationContent[];
      Backend: CurationContent[];
      Data: CurationContent[];
      Fullstack: CurationContent[];
      Infra: CurationContent[];
    };
  };
}

interface Author {
  name: string;
  title: string;
  url: string;
  image_url: string;
}

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

const CurationContext = React.createContext({ curation: null, authors: null, metadata: null });

/**
 * @example
 * <Curation 회차={1} 기수={10} />
 */
export const Curation = ({ 회차, 기수 = 10, 직군 }: CurationProps) => {
  const ordinaled회차 = toOrdinal(회차);
  const ordinaled기수 = toOrdinal(기수);

  const [curation, setCuration] = React.useState<CurationYml>(null);
  const [authors, setAuthors] = React.useState<{ [name: string]: Author }>(null);
  const [curationMetadata, setCurationMetadata] = React.useState<CurationMetadata>(null);

  // load curation-{기수}-{회차}.json
  React.useEffect(() => {
    const loadJson = async () => {
      try {
        const response = await fetch(`/__metadata__/curation-${기수}-${회차}.json`);
        const json = await response.json();
        setCurationMetadata(json);
      } catch (error) {
        console.error("Error loading the __metadata__ file:", error);
      }
    };
    loadJson();
  }, [기수, 회차]);

  React.useEffect(() => {
    const loadYamlFile = async () => {
      try {
        const response = await fetch("/curation.yml");
        const text = await response.text();
        const data = yaml.parse(text);
        setCuration(data);
      } catch (error) {
        console.error("Error loading the Curation YAML file:", error);
      }
    };
    loadYamlFile();
  }, []);

  React.useEffect(() => {
    const loadYamlFile = async () => {
      try {
        const response = await fetch("/authors.yml");
        const text = await response.text();
        const data = yaml.parse(text);
        setAuthors(data);
      } catch (error) {
        console.error("Error loading the Author YAML file:", error);
      }
    };
    loadYamlFile();
  }, []);

  if (!curation || !authors) {
    return <div>Loading...</div>;
  }

  return (
    <CurationContext.Provider value={{ curation, authors, metadata: curationMetadata }}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {직군 ? (
          <>
            <h2>{직군}</h2>
            {curation[ordinaled기수]?.[ordinaled회차]?.[직군]?.map((content) => (
              <CurationContent key={content.제목} {...content} />
            ))}
          </>
        ) : (
          <>
            {Object.entries(curation[ordinaled기수]?.[ordinaled회차]).map(([jobTitle, contents]) => (
              <div key={jobTitle} className={styles.curationContentContainer}>
                <h2>{jobTitle}</h2>
                {contents.map((content) => (
                  <CurationContent key={content.제목} {...content} />
                ))}
              </div>
            ))}
          </>
        )}
      </React.Suspense>
    </CurationContext.Provider>
  );
};

const CurationContent = (props: CurationContent) => {
  const { 제목, 주소, 작가, 설명 } = props;
  const authors = React.useContext(CurationContext).authors;
  const metadata = React.useContext(CurationContext).metadata as CurationMetadata[];
  const author = authors[작가];
  const thumbnail = metadata?.find((m) => m.author === 작가)?.ogImage;


  return (
    <div className={styles.curationContent}>
      {author ? (
        <>
          <div className={styles.authorContainer}>
            <img className={styles.authorImg} src={author.image_url} alt={author.name} />
            <a href={author.url} target="_blank" rel="noreferrer">
              {author.name}
            </a>
            님의
          </div>
          <a className={styles.curationContentLink} href={주소} target="_blank" rel="noreferrer">
            {제목}
          </a>
          {thumbnail && <img className={styles.curationContentThumbnail} src={thumbnail} alt={author.name} />}
          <p>{설명}</p>
        </>
      ) : (
        <>
          <span>{작가}님의</span>
          <a className={styles.curationContentLink} href={주소} target="_blank" rel="noreferrer">
            {제목}
          </a>
          <p>{설명}</p>
        </>
      )}
    </div>
  );
};
