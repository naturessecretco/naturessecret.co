import RootLayout from "@layouts/RootLayout"
import Header from "@views/components/Header"

import type { ILayout } from "@typings/Layout"


const PageLayout = ({ children, metaData }: ILayout) => {

    return (
        <RootLayout metaData={metaData}>
            {children}
        </RootLayout>
    )
}

export default PageLayout