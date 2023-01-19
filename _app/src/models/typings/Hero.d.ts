export type Link = {
    name?: string,
    url?: string,

}
export type Social = {
    name?: string,
    icon?: string,
    url?: string
}


export type HeroProps = {
    key?: string | number,
    name?: string,
    version?: string | number,
    title?: string,
    socials?: Social[],
    backgroundCover?: string,
    covers?: ImageProps[]
    cta?: CallToActionProps,
    features?: {
        heading: string,
        links: Link[]
    }

}