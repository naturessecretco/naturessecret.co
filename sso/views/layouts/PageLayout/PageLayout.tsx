import { ILayout } from "@typings/Layout"
import RootLayout from "@layouts/RootLayout"

const PageLayout = ({ children, metaData }: ILayout) => {

    return (
        <RootLayout metaData={metaData}>
            {children}
        </RootLayout>
    )
}
export default PageLayout