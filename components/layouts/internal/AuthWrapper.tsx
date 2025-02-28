"use client"
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    useEffect(() => {
        const isToken = getCookie("token")
        if (!isToken) {
            router.replace(`/login`)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <>{children}</>
    )
}
