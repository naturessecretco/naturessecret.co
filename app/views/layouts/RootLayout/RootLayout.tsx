
import type { ILayout } from "@models/typings/Layout"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Meta from "@includes/Meta"

import React from "react"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box>
            <CssBaseline />
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default React.memo(RootLayout)