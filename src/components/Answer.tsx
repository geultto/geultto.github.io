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
        "flex flex-col",
        direction === "right" && "grid-cols-[100px_1fr]",
        direction === "left" && "grid-cols-[1fr_100px]",
        direction === "center" && "grid-cols-[auto] justify-items-center text-center",
        "md:grid-cols-auto md:[&_.profile]:mx-auto md:[&_.name]:mx-auto md:text-left",
        "sm:grid sm:leading-7",
      )}
    >
      {direction === "left" && <div className="break-words">{children}</div>}
      {profileImg && (
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-[56px] h-[56px] overflow-hidden rounded-full border border-secondary-dark mt-6">
            <img src={profileImg} alt={name} className="w-full h-full object-contain" draggable={false} />
          </div>
          {name && <span className="text-center text-primary-lightest text-sm mt-2">{name}</span>}
        </div>
      )}
      {(direction === "right" || direction === "center") && <div className="break-words">{children}</div>}
    </div>
  );
}
