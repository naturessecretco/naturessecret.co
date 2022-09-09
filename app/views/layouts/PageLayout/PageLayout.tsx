import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"

const PageLayout = ({ children, metaData }) => {

    return (
        <RootLayout metaData={metaData}>
            <Header/>
            {children}
        </RootLayout>
    )
}

export default PageLayout