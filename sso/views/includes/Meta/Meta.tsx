import Head from "next/head"

export type MetaProps = {
    title?: string,
    pageTitle?: string
}


const Meta = ({ title, pageTitle }: MetaProps) => {

    return (
        <Head>
            <title>{`${title} | ${pageTitle}`}</title>
        </Head>
    )
}

export default Meta