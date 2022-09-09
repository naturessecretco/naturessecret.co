
import type { ILayout } from "@models/typings/Layout"

import Meta from "@includes/Meta"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <>
            <Meta {...metaData} />
            {children}
        </>
    )
}

export default RootLayout