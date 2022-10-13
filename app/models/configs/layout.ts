import { default as headerConfig } from "@configs/header";
import { default as footerConfig } from "@configs/footer"

import type { LayoutProps } from "@typings/Layout"

const layout = ({ header, footer, metaData }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
        metaData: {}
    }

    const layoutObject: LayoutProps = {
        header: header ?? defaultObject?.header,
        footer: footer ?? defaultObject?.footer,
        metaData: metaData ?? defaultObject?.metaData
    }

    return { ...layoutObject } as LayoutProps
}

export default layout 