import RootLayout from "@layouts/RootLayout"
import Header from "@views/components/Header"
import Footer from "@views/components/Footer"
import type { ILayout } from "@typings/Layout"
import header from "@db/header"


const PageLayout = ({ children, metaData }: ILayout) => {

    return (
        <RootLayout metaData={metaData}>
            <Header {...header}/>
            {children}
            <Footer/>
        </RootLayout>
    )
}

export default PageLayout