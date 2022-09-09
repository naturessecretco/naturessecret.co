import Head from "next/head"
import meta from "@configs/meta"

const Meta = ({ pageTitle }) => {

    return (
        <Head>
            <title>{meta.title} | {pageTitle ? pageTitle : "Home"}</title>
        </Head>
    )
}

export default Meta