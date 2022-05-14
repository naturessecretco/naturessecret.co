import Head from "next/head"
import meta from "@configs/meta"

const Meta = (props) => {

    let { title } = props

    let IconTags = () => {
         
        return (
            <link rel="apple-touch-icon" href="public/assets/icons/" />

        )
    }


    return (
        <Head>
            <title>{title}</title>
            <IconTags/>


        </Head>
    )
}

export default Meta