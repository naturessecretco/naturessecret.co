import { default as headerConfig } from "@configs/header";
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"
import type { LayoutProps } from "@typings/Layout"

const layout = ({ header, footer, metaData, menu }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
        metaData: {}
    }

    const layoutObject: LayoutProps = {
        header: header ?? defaultObject?.header,
        footer: footer ?? defaultObject?.footer,
        metaData: metaData ?? defaultObject?.metaData,
        menu: menu ?? defaultObject?.menu
    }

    return { ...layoutObject } as LayoutProps
}

export default layout 