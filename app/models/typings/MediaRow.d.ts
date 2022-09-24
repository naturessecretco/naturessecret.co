import type { ImageProps } from "@models/typings/Image"

export type MediaProps = {
    key?: any,
    cover?: ImageProps,
    title?: string,
    description?: string
}

export type MediaRowProps = {
    media: MediaProps[]
}
