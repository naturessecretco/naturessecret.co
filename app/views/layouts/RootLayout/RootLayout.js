import Meta from "@includes/Meta"

const RootLayout = (props) => {

    let { children } = props

    return (
        <>
            <Meta title="Nature's Secret" />
            {children}
        </>
    )
}


export default RootLayout;