import type { MetaProps } from "@typings/Meta"

const meta = ({ title, links, socials, phone, copyright, description, email, favicon }: MetaProps) => {

    const defaultObject: MetaProps = {
        title: "Natures Secret",
        version: Date.now(),
        links: [

            {
                name: 'Our Products',
                url: '/products'
            },
            {
                id: 'mission',
                name: 'Our Mission',
                url: '/mission'
            },
            {
                name: 'Your Benefits',
                url: '/benefits'
            },

            {
                name: 'Contact Us',
                url: '/#contact'
            },
            {
                name: 'Support Us',
                url: '#support'
            }
        ],
        description: "Home to Natures Best Kept Secrets",
        copyright: "©️ 2022 Natures Secret. All Rights Reserved.",
        phone: '(404) 491-7058',
        socials: [
            {
                name: 'Facebook',
                icon: 'FACEBOOK',
                url: 'https://www.facebook.com/Natures-Secret-108272722018369'
            },

            {
                name: 'Twitter',
                icon: 'TWITTER',
                url: 'https://twitter.com/naturessecretco'
            },
            {
                name: 'LinkedIn',
                icon: 'LINKEDIN',
                url: 'https://www.linkedin.com/company/naturessecretco/?viewAsMember=true'
            },
            {
                name: 'Ko-fi',
                icon: 'COFFEE',
                id: 'naturessecret',
                url: 'https://www.ko-fi.com/naturessecret'
            }
        ],
        email: 'info@naturessecret.co',
        favicon: {
            image: {
                url: '/assets/images/logo.png',
                alt: 'natures-secret-logo'
            },
            url: '/'
        }
    }

    const metaObject: MetaProps = {
        title: title ?? defaultObject.title,
        version: Date.now(),
        links: links ?? defaultObject.links,
        description: description ?? defaultObject.description,
        socials: socials ?? defaultObject.socials,
        phone: phone ?? defaultObject.phone,
        email: email ?? defaultObject.email,
        favicon: favicon ?? defaultObject.favicon,
        copyright: copyright ?? defaultObject.copyright
    }

    return { ...metaObject } as MetaProps
}

export default meta