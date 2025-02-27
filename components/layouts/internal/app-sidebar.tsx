"use client";

import * as React from "react";
import {
    GalleryVerticalEnd
} from "lucide-react";

import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader, SidebarRail
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";

const data = {
    user: {
        name: "demo",
        email: "demo@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Team 1",
            logo: GalleryVerticalEnd,
            plan: "Free",
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
