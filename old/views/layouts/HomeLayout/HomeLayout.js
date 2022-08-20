import RootLayout from "@layouts/RootLayout"
import NavBar from "@includes/NavBar"
import Footer from "@tailblocks/Footer"
import Fade from 'react-reveal/Fade';

const HomeLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            <NavBar />
            <Fade>
                {children}
            </Fade>
            <Footer />
        </RootLayout>
    )
}

export default HomeLayout