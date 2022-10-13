import FadeAnimation from '@components/FadeAnimation';
import Footer from "@components/Footer";
import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import RootLayout from "@layouts/RootLayout";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const PageLayout = ({ children, metaData, header, footer, menu }) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop smooth component={<KeyboardDoubleArrowUpIcon />} />
            <DrawerMenu {...menu} />
            <Header {...header} />
            <FadeAnimation triggerOnce duration={200} cascade>
                {children}
            </FadeAnimation>
            <Footer {...footer} />
        </RootLayout>
    )
}

export default React.memo(PageLayout)