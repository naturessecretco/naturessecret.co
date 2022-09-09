import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"


const PageLayout = ({ children, metaData }) => {

    return (
        <RootLayout metaData={metaData}>
            <Header />
            {children}
            <Footer />
        </RootLayout>
    )
}

export default PageLayout