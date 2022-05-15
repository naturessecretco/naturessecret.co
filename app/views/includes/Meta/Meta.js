import Head from "next/head"
import meta from "@configs/meta"


const Meta = (props) => {

    let { title, impressum } = props


    return (

        <Head>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Libre+Baskerville&display=swap" rel="stylesheet" />


            {
            <link rel="apple-touch-icon" href="public/assets/icons/180x180.png" />

            }
        </Head>
    )
}

export default Meta