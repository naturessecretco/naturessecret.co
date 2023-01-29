import type { LinkProps } from "@typings/Link"
import type { FaviconProps } from "@typings/Favicon"
import type { BannerProps } from "@typings/Banner"

export type HeaderProps = {
    favicon?: FaviconProps,
    links?: LinkProps[],
    message?: BannerProps
}