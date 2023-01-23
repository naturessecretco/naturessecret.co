import type { NavLink } from "@typings/NavLink"
import type { Social } from "@typings/Social"
import type { Favicon } from "@typings/Favicon"



export type CopyrightProps = {
    text?: string,
}

export type FooterProps = {
    copyright?: string,
    phone?: string,
    message?: {
        text?: string,
        id?: string,
        url?: string,
    },
    email?: string
    socials?: Social[],
    tag?: {
        message?: string,
        id?: string,
        url?: string,
    },
    favicon?: {
        image?: {
            src?: string
        },
        url?: string
    },
    navLinks?: NavLink[]
}
