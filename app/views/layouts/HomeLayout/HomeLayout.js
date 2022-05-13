import RootLayout from "@layouts/RootLayout"
import Header from "@tailblocks/Header"
import Footer from "@tailblocks/Footer"


const HomeLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <Header />
            {children}
            <Footer />
        </RootLayout>
    )
}

export default HomeLayout