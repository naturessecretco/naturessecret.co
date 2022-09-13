import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@views/includes/DrawerMenu"
import { Fade } from 'react-awesome-reveal';
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top";


const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <DrawerMenu {...menu} />
            <Header {...header} />
            <Fade>
                {children}
            </Fade>
            <Footer {...footer} />
            <ScrollToTop smooth className="translate-x-1/2" />
        </RootLayout>
    )
}

export default PageLayout