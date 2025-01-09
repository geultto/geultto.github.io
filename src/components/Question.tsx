import type * as React from "react";

interface QuestionProps {
  children: React.ReactNode;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="mt-10 flex w-full rounded-[20px] border border-secondary-dark px-6 py-1 mb-4 items-center">
      <div>
        <p className="text-xl font-bold pr-2">Q.</p>
      </div>
      {children}
    </div>
  );
}
