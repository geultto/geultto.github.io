import { Feed } from "feed";

import type { Author } from "../types/author";

interface FeedOptions {
  title: string;
  description: string;
  posts: Array<{
    title: string;
    description: string;
    date: Date;
    url: string;
    author?: Author;
  }>;
}

export function generateFeed(options: FeedOptions) {
  const feed = new Feed({
    title: options.title,
    description: options.description,
    id: "https://geultto.github.io/",
    link: "https://geultto.github.io/",
    language: "ko",
    copyright: `Copyright © ${new Date().getFullYear()} 글쓰는 또라이`,
  });

  for (const post of options.posts) {
    feed.addItem({
      title: post.title,
      description: post.description,
      date: post.date,
      link: post.url,
      author: post.author
        ? [
            {
              name: post.author.name,
              link: post.author.url,
            },
          ]
        : undefined,
    });
  }

  return feed;
}
