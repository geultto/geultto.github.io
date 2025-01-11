import type * as React from "react";
import { cn } from "@/src/lib/utils";

interface AnswerProps {
  children: React.ReactNode;
  profileImg?: string;
  name?: string;
  direction?: "left" | "right" | "center";
}

export function Answer({ children, profileImg, name = "", direction = "right" }: AnswerProps) {
  return (
    <div
      className={cn(
        "grid leading-7",
        direction === "right" && "grid-cols-[100px_1fr]",
        direction === "left" && "grid-cols-[1fr_100px]",
        direction === "center" && "grid-cols-[auto] justify-items-center text-center",
        "md:grid-cols-auto md:[&_.profile]:mx-auto md:[&_.name]:mx-auto md:text-left",
      )}
    >
      {direction === "left" && <div className="break-words">{children}</div>}
      {profileImg && (
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-[64px] h-[64px] overflow-hidden rounded-full border border-secondary-dark mr-4">
            <img src={profileImg} alt={name} className="w-full h-full object-contain" draggable={false} />
          </div>
          {name && <p className="w-20 text-center text-primary-lightest text-sm">{name}</p>}
        </div>
      )}
      {(direction === "right" || direction === "center") && <div className="break-words">{children}</div>}
    </div>
  );
}
