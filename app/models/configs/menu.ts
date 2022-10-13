
import type { MenuProps } from "@models/typings/Menu"

const menu = ({ navLinks }: MenuProps) => {

    const defaultObject: MenuProps = {
        navLinks: []
    }

    const menuObject: MenuProps = {
        navLinks: navLinks ?? defaultObject?.navLinks
    }

    return { menuObject } as MenuProps
}
export default menu