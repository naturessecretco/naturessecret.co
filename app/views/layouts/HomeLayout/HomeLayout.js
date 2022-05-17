import RootLayout from "@layouts/RootLayout"
import Header from "@tailblocks/Header"
import Footer from "@tailblocks/Footer"
import Fade from 'react-reveal/Fade';

const HomeLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <Header />

            <Fade>
                {children}
                <Footer />
            </Fade>

        </RootLayout>
    )
}

export default HomeLayout