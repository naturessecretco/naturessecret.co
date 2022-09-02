import { Box as MuiBox } from "@mui/material"

export type BoxProps = {
    stylizer?: any,
    children?: any
}

const Box = ({ stylizer, children }: BoxProps) => {

    return (
        <MuiBox sx={stylizer}>
            {children}
        </MuiBox>
    )
}

export default Box