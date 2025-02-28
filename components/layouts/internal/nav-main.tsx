"use client";

import { UsersRound, LayoutDashboard, Plus } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";


const IS_ADMIN = false;

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/my-plans", icon: UsersRound, label: "My plan" },
  { href: "/my-plans/create", icon: Plus, label: "Create Plan" },
];


export function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        {(IS_ADMIN ? navItems : navItems).map(({ href, icon: Icon, label }) => (
          <SidebarMenuItem key={href}>
            <SidebarMenuButton asChild isActive={pathname === href}>
              <Link href={href}>
                <Icon />
                <span>{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
