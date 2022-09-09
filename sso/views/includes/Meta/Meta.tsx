import Head from "next/head"
import meta from "@configs/meta"


const Meta = ({ pageTitle }) => {

    return (
        <Head>
            <title>{meta.title} | {pageTitle || "Home"}</title>
            <>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Major+Mono+Display&family=Nova+Mono&display=swap"
                    rel="stylesheet"
                />
            </>



            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon android-chrome icon" href="/assets/images/facade.svg" />
 


        </Head >
    )
}

export default Meta