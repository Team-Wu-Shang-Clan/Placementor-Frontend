"use client";

import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export function UserProfileDropdown({ data }: { data?: unknown }) {
    const router = useRouter();
    const handleLogout = async () => {
        router.push("/");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={() => console.log(data)}>
                <div className="hover:cursor-pointer">
                    <div className="gap-2 hidden md:flex md:justify-center md:items-center">
                        <Avatar className="h-9 w-9 rounded-md text-sm"> 
                            <AvatarFallback className="rounded-md">JD</AvatarFallback>
                        </Avatar>
                    </div>
                    <Button variant="outline" className="md:hidden flex items-center">
                        <User className="size-4" />
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium leading-none">My Account</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            john@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={handleLogout}
                    className="focus:bg-destructive focus:text-destructive-foreground"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
