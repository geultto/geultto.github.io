export type Author = {
  name: string;
  title: string;
  url?: string;
  image_url?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    blog?: string;
    [key: string]: string | undefined;
  };
};

export type Authors = {
  [key: string]: Author;
};
