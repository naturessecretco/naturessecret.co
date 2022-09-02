import Box from "@mui/material/Box"
import Meta from "@includes/Meta"
import { ILayout } from "@typings/Layout"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout