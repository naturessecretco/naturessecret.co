import Meta from "@includes/Meta"
import type { ILayout } from "@typings/Layout";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box"




const RootLayout = ({ children, metaData }: ILayout) => {

    return (
    
            <>
            
            <CssBaseline />
            <Meta {...metaData} />
            {children}
            </>
    )
    
}


export default RootLayout