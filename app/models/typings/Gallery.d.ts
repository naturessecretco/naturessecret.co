import type { CallToActionProps } from "@typings/CallToAction"
export type GalleryItemProps = {
    title?: string,
    description?: string,
    source?: string
}

export type GalleryProps = {
    id?: string,
    version?: string | number,
    title?: string | any,
    name?: string,
    cta?: CallToActionProps
    items?: GalleryItemProps[]
}
