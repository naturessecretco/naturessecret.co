import RootLayout from "@layouts/RootLayout"
import Header from "@tailblocks/Header"
import Footer from "@tailblocks/Footer"
import Hero from "@tailblocks/Hero"

const HomeLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <Header />
            <Hero />
            {children}
            <Footer />
        </RootLayout>
    )
}

export default HomeLayout