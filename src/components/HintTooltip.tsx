import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/src/components/ui/tooltip";

import type * as React from "react";

interface HintTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export function HintTooltip({ children, content }: HintTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <span className="text-primary-dark relative">
            {children}
            <sup className="text-primary-dark text-xs">!</sup>
          </span>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
