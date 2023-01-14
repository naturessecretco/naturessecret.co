import Footer from "@components/Footer";
import Header from "@components/Header";
import DrawerMenu from "@includes/DrawerMenu";
import RootLayout from "@layouts/RootLayout";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import React from "react";
import ScrollToTop from "react-scroll-to-top";


export type LayoutProps = {
    children?: any,
    metaData?: any,
    header?: any,
    footer?: any,
    menu?: any
}

const PageLayout = ({ children, metaData, header, footer, menu }: LayoutProps) => {

    return (
        <RootLayout metaData={metaData}>
            <ScrollToTop smooth component={<KeyboardDoubleArrowUpIcon />} />
            <DrawerMenu {...menu} />
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default React.memo(PageLayout)