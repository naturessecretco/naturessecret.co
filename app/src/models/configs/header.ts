
import type { HeaderProps } from "@typings/Header"
import images from "@configs/images"

const header = ({ favicon, links, message }: HeaderProps) => {

    const logoImage = images().find((image) => image.id === "logo")

    const defaultObject: HeaderProps = {
        favicon: {
            image: { src: logoImage },
            url: "/"
        },

        links: [
            {
                name: 'Home',
            }
        ],
        message: {
            text: '[@server]: MESSAGE_TEXT_NOT_FOUND',
            url: '',
        }

    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
        links: links ?? defaultObject?.links,
        message: message ?? defaultObject?.message
    }

    return { ...headerObject } as HeaderProps
}


export default header