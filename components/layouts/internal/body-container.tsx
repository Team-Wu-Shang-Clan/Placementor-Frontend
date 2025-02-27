"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

export const BodyContainer = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isDocsPage = pathname.startsWith("/my-documents/") && pathname.split("/").length === 3;

    return (
        <div
            className={cn(
                "w-full h-full flex mx-auto justify-center items-center px-4 py-10 xl:px-6",
                {
                    "p-0 xl:px-0 w-full": isDocsPage,
                    "container": !isDocsPage,
                }
            )}
        >
            {children}
        </div>
    );
};
