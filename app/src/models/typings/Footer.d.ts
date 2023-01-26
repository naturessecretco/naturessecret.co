import type { FaviconProps } from "@typings/Favicon"


export type FooterProps = {
    copyright?: string,
    phone?: string,
    impressum?: string,
    disclaimer?: string,
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

    links?: any
}
