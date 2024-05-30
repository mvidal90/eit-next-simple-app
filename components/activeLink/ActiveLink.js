"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import style from './ActiveLink.module.css'

export const ActiveLink = ({path, label}) => {
    const pathName = usePathname()
    return (
        <Link 
            href={path}
            className={`${style.link} ${(pathName === path) ? style["active-link"] : undefined}`}>
                {label}
        </Link>
    )
}

