import CoffeeIcon from "@mui/icons-material/Coffee"
import FacebookIcon from "@mui/icons-material/Facebook"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"


const icons = () => {

    const iconsObject = {
        "KEYBOARD_DOUBLE_ARROW_UP": KeyboardDoubleArrowUpIcon,
        "FACEBOOK": FacebookIcon,
        "TWITTER": TwitterIcon,
        "COFFEE": CoffeeIcon,
        "LINKEDIN": LinkedInIcon,
    }

    return { ...iconsObject } ?? {}
}


export default icons