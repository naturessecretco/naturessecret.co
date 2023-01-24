import { default as headerConfig } from "@configs/header";
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"
import type { LayoutProps } from "@models/typings/Layout";


const layout = ({ header, footer, metaData, menu, contacts }: LayoutProps) => {

    const defaultObject = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
        contactRow: {},
        metaData: {}
    }

    const layoutObject = {
        header: header ?? defaultObject?.header,
        footer: footer ?? defaultObject?.footer,
        contacts: contacts ?? defaultObject?.contactRow,
        metaData: metaData ?? defaultObject?.metaData,
        menu: menu ?? defaultObject?.menu
    }

    return layoutObject as LayoutProps
}

export default layout 