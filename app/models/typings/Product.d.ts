import type { ImageProps } from "@typings/Image"

export type ProductProps = {
    id?: string,
    key?: string | number,
    version?: number | string,
    name?: string,
    url?: string,
    gumroadURL: string,
    heading?: string,
    description?: string,
    sku?: string,
    tags?: string[],
    value?: string,
    price?: string,
    discount?: string,
    covers?: ImageProps[],
}
