import React from "react";
import { cn } from "@/lib/utils";

interface MainProps extends React.HTMLAttributes<React.ElementRef<"main">> {
  fixed?: boolean;
}

export const Main = React.forwardRef<React.ElementRef<"main">, MainProps>(
  ({ fixed, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "bg mt-2 flex flex-col p-8",
          fixed && "flex flex-grow flex-col h-full",
        )}
        {...props}
      />
    );
  },
);
Main.displayName = "Main";
