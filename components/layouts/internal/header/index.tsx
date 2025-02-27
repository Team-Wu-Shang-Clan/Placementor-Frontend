import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { UserProfileDropdown } from '../user-profile-dropdown-menu'
import { ThemeDropdownMenu } from '@/components/theme-dropdown-menu'

export const AppHeader = () => {
    return (
        <div className="h-16 bg-background border-b w-full px-4 flex justify-between items-center sticky top-0">
            <SidebarTrigger />
            <div className='flex gap-4 justify-center items-center'>
                <ThemeDropdownMenu />
                <UserProfileDropdown />
            </div>
        </div>
    )
}
