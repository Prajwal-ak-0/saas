"use client"

import Logo from '@/components/Logo'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ToggleLogo = () => {
    const { theme } = useTheme()
    const router = useRouter();

    return (
        <div className="hover:cursor-pointer" onClick={() => router.push('./')}>
            {
                theme === "dark" ? (
                    <Image
                        src="/images/logo2.png"
                        alt="logo"
                        className="px-2 my-auto"
                        width={250}
                        height={250}
                    />
                ) : (
                    <Logo />
                )
            }
        </div>
    )
}

export default ToggleLogo