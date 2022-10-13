
import type { HeaderProps } from "@typings/Header"
import images from "@configs/images"

const header = ({ favicon, links, banner }: HeaderProps) => {

    const logoImage = images().find((image) => image.id === "logo")

    const defaultObject: HeaderProps = {
        favicon: {
            image: logoImage,
            url: "/"
        },

        links: [],
        banner: {
            message: '',
            url: '',
        }

    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
        links: links ?? defaultObject?.links,
        banner: banner ?? defaultObject?.banner
    }

    return { ...headerObject } as HeaderProps
}


export default header