
import type { HeaderProps } from "@typings/Header"
import images from "@configs/images"

const header = ({ favicon, navLinks, banner }: HeaderProps) => {

    const logoImage = images().find((image) => image.id === "logo")
    
    const defaultObject: HeaderProps = {
        favicon: {
            image: logoImage,
            url: "/"
        },

        navLinks: [],
        banner: {
            message: '',
            url: '',
        }

    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
        navLinks: navLinks ?? defaultObject?.navLinks,
        banner: banner ?? defaultObject?.banner
    }

    return { ...headerObject } as HeaderProps
}


export default header