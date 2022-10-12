import { default as headerConfig } from "@configs/header";
import { default as footerConfig } from "@configs/footer"

import type { LayoutProps } from "@typings/Layout"

const layout = ({ header, footer }: LayoutProps) => {

    const defaultObject: LayoutProps = {
        header: headerConfig({}),
        footer: footerConfig({}),
    }

    const layoutObject: LayoutProps = {
        header: header ?? defaultObject?.header,
        footer: footer ?? defaultObject?.footer
    }

    return { ...layoutObject } as LayoutProps
}

export default layout 