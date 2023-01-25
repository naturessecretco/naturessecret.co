import type { ImageProps } from "@models/typings/Image"

export type MediaProps = {
    key?: any,
    url?: string,
    version?: string,
    cover?: ImageProps,
    price?: string,
    title?: string,
    description?: string
}

export type MediaRowProps = {
    media?: MediaProps[],
    title?: string
}
