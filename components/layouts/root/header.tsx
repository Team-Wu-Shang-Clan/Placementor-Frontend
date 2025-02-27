"use client"
import { LogIn } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";


export default function Header() {
    return (
        <nav className="shadow-md sticky top-0 left-0 right-0 bg-background border-b w-full z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between h-16">
                    <Logo />

                    <div className="ml-6 flex items-center">
                        <Link
                            href={"/auth/login"}
                            className={buttonVariants({
                                variant: "secondary",
                                className: "ml-4 flex items-center",
                            })}
                        >
                            <LogIn className="h-5 w-5 mr-2" />
                            Login
                        </Link>
                        <Link
                            href={"/auth/signup"}
                            className={buttonVariants({
                                className: "ml-4 hidden sm:block",
                            })}
                        >
                            Sign Up
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}
