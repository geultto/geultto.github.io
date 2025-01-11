import Link from "next/link";

import { Badge } from "@/src/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { blogSource } from "@/src/lib/source";

import type { Authors } from "@/src/types/author";

import authorsYaml from "../../authors.yml";

// TODO: 페이지 컴포넌트 공통화 혹은 추상화
export const BlogListPage = () => {
  // Index page는 제외
  const removedPages = blogSource.getPages().filter((page) => page.slugs.length !== 0);

  // 기간순으로 정렬
  const sortedPages = removedPages.sort(
    (a, b) =>
      new Date(b.data.updatedAt || b.data.createdAt || "").getTime() -
      new Date(a.data.updatedAt || a.data.createdAt || "").getTime(),
  );

  const authors = authorsYaml as Authors;

  return (
    <div className="flex flex-col gap-4">
      {sortedPages.map((page) => (
        <Link href={page.url} key={page.url} className="no-underline">
          <Card key={page.url} className="hover:bg-gray-100 transition-all">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle>{page.data.title}</CardTitle>
              <CardDescription className="flex gap-2 items-center h-full">
                <div className="flex gap-2 items-center">
                  {page.data.authors?.map((author) => {
                    const authorInfo = authors[author];
                    return (
                      <div key={author} className="flex gap-2 items-center h-[32px]">
                        <img
                          src={authorInfo.image_url}
                          alt={authorInfo.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>{authorInfo.name}</span>
                      </div>
                    );
                  })}
                </div>
                <span>{page.data.updatedAt ? `Last updated: ${page.data.updatedAt}` : page.data.createdAt}</span>
              </CardDescription>
              {page.data.description && <span className="text-sm text-gray-800">{page.data.description}</span>}
              {page.data.tags && (
                <div className="flex gap-2 flex-wrap mt-4">
                  {page.data.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};
