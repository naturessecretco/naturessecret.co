import type { Image } from "@models/typings/Image"

export type MediaProps = {
    key?: any,
    cover?: Image,
    title?: string,
    description?: string
}

export type MediaRowProps = {
    media: Media[]
}
