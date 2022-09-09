import RootLayout from "@layouts/RootLayout"
import { ILayout } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import DrawerMenu from "@components/DrawerMenu"
import React from "react"
import header from "@configs/header"
import footer from "@configs/footer"

const PageLayout = ({ children, metaData }: ILayout) => {


    return (
        <RootLayout metaData={metaData}>
            <DrawerMenu {...header}/>
            <Header {...header} />
            {children}
            <Footer {...footer} />
        </RootLayout>
    )
}

export default React.memo(PageLayout)