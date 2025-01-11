"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";

import type { Authors } from "@/src/types/author";

import authorsYaml from "../../authors.yml";

interface AuthorProps {
  name: string;
}

export default function Author({ name }: AuthorProps) {
  const authors = authorsYaml as Authors;
  const author = authors[name];

  if (!author) {
    return (
      <Avatar>
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
    );
  }

  const authorInfo = authors[name];

  if (!authorInfo) {
    return (
      <Avatar>
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-12 h-12">
        <AvatarImage src={authorInfo.image_url} alt={authorInfo.name} />
        <AvatarFallback>{authorInfo.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div>
        <h3 className="font-medium text-sm">{authorInfo.name}</h3>
        <p className="text-xs text-gray-500">{authorInfo.title}</p>

        {authorInfo.socials && (
          <div className="flex gap-1">
            {authorInfo.socials.github && (
              <Button variant="link" asChild className="p-1 text-xs">
                <a href={`https://github.com/${authorInfo.socials.github}`} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            )}
            {authorInfo.socials.linkedin && (
              <Button variant="link" asChild className="p-1 text-xs">
                <a
                  href={`https://linkedin.com/in/${authorInfo.socials.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            )}
            {authorInfo.socials.blog && (
              <Button variant="link" asChild className="p-1 text-xs">
                <a href={authorInfo.socials.blog} target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
