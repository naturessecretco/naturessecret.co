
import Box from "@mui/material/Box"
import Meta from "@includes/Meta"

import React from "react"

const RootLayout = ({ children, metaData }) => {

    const ContainerSx = {
        overflowX: "hidden",

        background: "url('/assets/images/bg.jpg') fixed center center",
        backgroundSize: "cover",
        boxShadow: 'inset 0 0 0 10000px rgba(252, 198, 49,.50)'
    }


    return (
        <Box sx={ContainerSx}>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default React.memo(RootLayout)