export type GalleryItem = {
    title?: string,
    description?: string,
    source?: string
}

export type GalleryProps = {
    id?: string,
    version?: string | number,
    title?: string,
    name?: string,
    cta?: CallToAction
    items?: GalleryItem[]
}
