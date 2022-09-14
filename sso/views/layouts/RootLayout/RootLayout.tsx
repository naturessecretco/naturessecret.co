
import { ILayout } from "@typings/Layout"
import Meta from "@includes/Meta"
import Box from "@mui/material/Box"
import { CssBaseline } from "@mui/material"

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