import type { FaviconProps } from "@typings/Favicon"



export type CopyrightProps = {
    text?: string,
}

export type FooterProps = {
    copyright?: string,
    phone?: string,
    tagLine?: string,
    message?: {
        text?: string,
        id?: string,
        url?: string,
    },
    email?: string
    socials?: any[],
    tag?: {
        message?: string,
        id?: string,
        url?: string,
    },
    favicon?: FaviconProps,

    navLinks?: any[]
}
