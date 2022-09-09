import type { User } from "@typings/User"
import type { Favicon } from "@typings/Favicon"
import type { NavLink } from "@typings/NavLink"
import type { ActionLink } from "@typings/ActionLink"
import type { ActionButton } from "@typings/ActionButton"

export type HeaderProps = {
    user: User,
    favicon: Favicon,
    navLinks?: NavLink[],
    actionLinks?: actionLink[],
    actionButtons?: ActionButton[],
}