import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default PageLayout