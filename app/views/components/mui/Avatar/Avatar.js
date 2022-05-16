import { Avatar as MuiAvatar } from '@mui/material/Avatar';




const Avatar = (props) => {

    let { alt, src } = props

    return (
        <MuiAvatar alt={alt} src={src} height="24px" width="24px" />
    )
}

export default Avatar

