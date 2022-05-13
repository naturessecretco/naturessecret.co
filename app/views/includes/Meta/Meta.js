import Head from "next/head"

const Meta = (props) => {

    let { title } = props

    return (
        <Head>
            <title>{ title }</title>
        </Head>
    )
}

export default Meta