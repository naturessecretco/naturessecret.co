import RootLayout from "@layouts/RootLayout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@views/includes/DrawerMenu"
import { Fade } from 'react-awesome-reveal';
import menu from "@configs/menu"
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import React from "react"

const PageLayout = ({ children, metaData, header, footer }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop smooth component={<KeyboardDoubleArrowUpIcon />} />
            <DrawerMenu {...menu()} />
            <Header {...header} />
            <Fade triggerOnce duration={200} cascade>
                {children}
            </Fade>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default React.memo(PageLayout)