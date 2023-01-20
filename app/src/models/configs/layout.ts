import { default as headerConfig } from "@configs/header";
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"
import type { LayoutProps } from "@typings/Layout"

const layout = ({ header, footer, menu }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
    }

    const layoutObject: LayoutProps = {
        header: header ?? defaultObject?.header,
        footer: footer ?? defaultObject?.footer,
        menu: menu ?? defaultObject?.menu
    }

    return { ...layoutObject } as LayoutProps
}

export default layout 