"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { TwitterIcon, GithubIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const EXCLUDED_PATHS = ["/auth/login", "/auth/signup"]

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    const pathname = usePathname()


    if (EXCLUDED_PATHS.includes(pathname)) return null

    return (
        <footer className="w-full border-t bg-gray-50 dark:bg-gray-900" role="contentinfo" aria-label="Site footer">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4">
                        <Logo isLogoOnly />
                        <p className="text-muted-foreground text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At non aliquam, maiores expedita rerum accusantium eum reprehenderit nostrum aspernatur et?
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/projects"
                                    className={buttonVariants({
                                        variant: "link",
                                        className: "text-muted-foreground hover:text-primary !p-0",
                                    })}
                                >
                                    Lorem, ipsum.
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#featured-projects"
                                    className={buttonVariants({
                                        variant: "link",
                                        className: "text-muted-foreground hover:text-primary !p-0",
                                    })}
                                >
                                    Lorem, ipsum.
                                </Link>
                            </li>
                            <li>
                                <Button
                                    variant="link"
                                    className="p-0 text-muted-foreground hover:text-primary"
                                >
                                    Lorem, ipsum.
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="link"
                                    className="p-0 text-muted-foreground hover:text-primary text-left"
                                >
                                    Lorem, ipsum.
                                </Button>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className={buttonVariants({
                                        className: "text-sm text-muted-foreground hover:text-primary !p-0",
                                        variant: "link",
                                    })}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className={buttonVariants({
                                        className: "text-sm text-muted-foreground hover:text-primary !p-0",
                                        variant: "link",
                                    })}
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookie-policy"
                                    className={buttonVariants({
                                        className: "text-sm text-muted-foreground hover:text-primary !p-0",
                                        variant: "link",
                                    })}
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Button variant="outline" size="icon" className="rounded-full bg-blue-500 hover:bg-blue-600" asChild>
                                <a
                                    href="https://twitter.com/example"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Twitter"
                                >
                                    <TwitterIcon className="h-4 w-4" color="white" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full bg-orange-500 hover:bg-orange-600" asChild>
                                <a
                                    href="https://github.com/exmaple"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our GitHub repository"
                                >
                                    <GithubIcon className="h-4 w-4" color="white" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-center text-muted-foreground">
                        © {currentYear} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid?
                    </p>
                </div>
            </div>
        </footer>
    )
}

