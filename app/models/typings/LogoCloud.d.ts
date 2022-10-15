import type { ImageProps } from "@typings/Image"

export type LogoProps = {
    image?: ImageProps,
    url?: string

}
export type LogoCloudProps = {
    title?: string,
    logos?: LogoProps[]
}