import type { ImageProps } from "@typings/Image"
import type { FaviconProps } from "@typings/Favicon"
import type { LinkProps } from "@typings/Link"

export type MetaProps = {
    title?: string,
    version?: string | number | null,
    links?: LinkProps[],
    socials?: SocialProps[],
    phone?: string,
    copyright?: string,
    description?: string,
    email?: string,
    favicon?: FaviconProps
}
