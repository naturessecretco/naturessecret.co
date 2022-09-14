import type { NavLink } from "@typings/NavLink"
import type { Social } from "@typings/Social"
import type { Favicon } from "@typings/Favicon"


export type FooterProps = {
    copyright?: string,
    phone?: string,
    email?: string
    socials?: Social[]
    favicon?: Favicon,
    navLinks?: NavLink[]
}
