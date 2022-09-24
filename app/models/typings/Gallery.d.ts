export type GalleryItem = {
    title?: string,
    description?: string,
    source?: string
}

export type GalleryProps = {
    id?: string,
    version?: string | number,
    title?: string | any,
    name?: string,
    cta?: CallToAction
    items?: GalleryItem[]
}
