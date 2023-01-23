import type { FooterProps } from "@typings/Footer"
import images from "@configs/images"

const footer = ({ favicon, socials, navLinks, copyright, tagLine, phone, email }: FooterProps) => {

    const logoImage = images().find((image) => image.id === "logo")

    const defaultObject: FooterProps = {
        favicon: {
            image: { src: logoImage },
            url: "/"
        },
        socials: [],
        navLinks: [],
        tagLine: "[@service]: TAGLINE_NOT_FOUND",
        copyright: "[{text: 'All Rights Reserved.'}]",
        phone: '888-888-8888',
        email: 'test@email'

    }

    const footerObject: FooterProps = {
        favicon: favicon ?? defaultObject?.favicon,
        socials: socials ?? defaultObject?.socials,
        tagLine: tagLine ?? defaultObject?.tagLine,
        navLinks: navLinks ?? defaultObject?.navLinks,
        copyright: copyright ?? defaultObject?.copyright,
        phone: phone ?? defaultObject?.phone,
        email: email ?? defaultObject?.email
    }

    return { ...footerObject } as FooterProps
}

export default footer