import type { FooterProps } from "@typings/Footer"
import images from "@configs/images"

const footer = ({ favicon, socials, navLinks, copyrights, phone, email }: FooterProps) => {

    const logoImage = images().find((image) => image.id === "logo")
    
    const defaultObject: FooterProps = {
        favicon: {
            image: logoImage,
            url: "/"
        },
        socials: [],
        navLinks: [],
        copyrights: [{text: 'All Rights Reserved.'}],
        phone: '888-888-8888',
        email: 'test@email'

    }

    const footerObject: FooterProps = {
        favicon: favicon ?? defaultObject?.favicon,
        socials: socials ?? defaultObject?.socials,
        navLinks: navLinks ?? defaultObject?.navLinks,
        copyrights: copyrights ?? defaultObject?.copyrights,
        phone: phone ?? defaultObject?.phone,
        email: email ?? defaultObject?.email
    }

    return { ...footerObject } as FooterProps
}

export default footer