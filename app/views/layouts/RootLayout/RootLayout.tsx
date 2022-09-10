
import type { ILayout } from "@models/typings/Layout"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Meta from "@includes/Meta"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box>
            <CssBaseline />
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout