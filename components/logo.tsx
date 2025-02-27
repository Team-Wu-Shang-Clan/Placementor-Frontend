"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
    href?: string;
    isLogoOnly?: boolean;
    debugData?: unknown
    classes?: {
        text?: string
    }
};

export function Logo({ href = "/", isLogoOnly, classes }: Props) {
    return (
        <Link href={href} className={cn("flex-shrink-0 flex gap-2 items-center")}>
            {!isLogoOnly && (
                <span className={cn("text-sm italic font-bold text-foreground", classes?.text)}>
                    🤖 <span className="underline">Placementor AI</span>
                </span>
            )}
        </Link>
    );
}
