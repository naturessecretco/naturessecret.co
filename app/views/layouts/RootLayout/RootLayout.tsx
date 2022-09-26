
import type { ILayout } from "@models/typings/Layout"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Meta from "@includes/Meta"

import React from "react"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box sx={{
            background: "url('/assets/images/bg.jpg') fixed center center",
            backgroundSize: "cover",
            boxShadow: 'inset 0 0 0 1000px rgba(254,245,45,.60)'

        }}>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default React.memo(RootLayout)