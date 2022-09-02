import Meta from "@includes/Meta"
import { CssBaseline } from "@mui/material";
import Box from "@components/Box"

import type { ILayout } from "@typings/Layout";



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