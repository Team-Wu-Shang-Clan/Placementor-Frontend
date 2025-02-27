import React, { ReactNode } from 'react'
import Header from './header'
import { Footer } from './footer'

export const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
