
import type { ILayout } from "@models/typings/Layout"
import CssBaseLine from "@mui/material/CssBaseLine"
import Box from "@mui/material/Box"
import Meta from "@includes/Meta"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box>
            <CssBaseLine />
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout