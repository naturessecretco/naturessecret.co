import Head from "next/head"
import meta from "@configs/meta"


export type Font = {
    href: string
}
export type Preload = {
    name?: string,
    href: string
}

export type Preconnect = Preload
export type Stylesheet = {
    name?: string,
}

export type MetaProps = {
    title?: string,
    pageTitle: string,
    description: string,
    copyright: string,
    fonts: Font[],
    preloads: Preload[],
    preconnects: Preconnect[],
    stylesheets: Stylesheet[]
}


const Meta = ({ description, copyright, pageTitle, preconnects }: MetaProps) => {


    const { title , description: siteDescription, copyright: siteCopyright, icons: siteIcons, fonts,  } = meta


    const PreConnects = (preconnects: Preconnect[]) => {


        preconnects.map((preconnect, index) => {

            return (
                <link key={index} rel="preconnect" href={preconnect.href} crossOrigin="true" />

            )
        })

    }
    const Fonts = (fonts: Font[]) => {

        return (

            <link
                href=""
                rel="stylesheet"
            />

        )
    }

    const Icons = (icons) => {

        return <>
            <link rel="android-chrome icon shortcut" sizes={"180x180"} href="/assets/icons/180x180.png" />
        </>
    }

    return (
        <Head>
            <title>{title} | {pageTitle}</title>
        </Head>
    )
}

export default Meta