import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@views/includes/DrawerMenu"
import { Fade } from 'react-awesome-reveal';
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <DrawerMenu {...menu} />
            <Header {...header} />
            <Fade>
                {children}
            </Fade>
            <Footer {...footer} />
            <ScrollToTop smooth component={<KeyboardDoubleArrowUpIcon/>} className="translate-x-1/2" />
        </RootLayout>
    )
}

export default PageLayout