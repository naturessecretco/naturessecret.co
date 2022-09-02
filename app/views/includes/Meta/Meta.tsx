import Head from "next/head"
import meta from "@configs/meta"

export type Preload = {
    name?: string,
    href: string
}

export type Preconnect = Preload
export type Stylesheet = {
    name?: string,
}

export type MetaProps = {
    title: string,
    pageTitle: string,
    description: string,
    copyright: string,
    preloads: Preload[],
    preconnects: Preconnect[],
    stylesheets: Stylesheet[]
}


const Meta = ({ title, description, copyright, pageTitle, preconnects }: MetaProps) => {


    const { title: siteTitle, description: siteDescription, copyright: siteCopyright } = meta


    const PreConnects = (preconnects: Preconnect[]) => {


        preconnects.map((preconnect, index) => {

            return (
                <link key={index} rel="preconnect" href={preconnect.href} crossOrigin="true" />

            )
        })

    }

    const Icons = () => {

        return <>
            <link rel="android-chrome icon shortcut" sizes={"180x180"} href="/assets/icons/180x180.png" />
        </>
    }

    return (
        <Head>
        
                <title>{siteTitle} | {pageTitle}</title>

                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
                    rel="stylesheet"
                />


        </Head>
    )
}

export default Meta