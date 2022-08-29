import Meta from "@includes/Meta"
import type { ILayout } from "@typings/Layout";

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <>
            <Meta {...metaData} />
            {children}
        </>
    )
}


export default RootLayout