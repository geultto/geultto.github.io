
export interface CurationContent {
  제목: string;
  주소: string;
  작가: string;
  직군: string;
  설명: string;
}

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
