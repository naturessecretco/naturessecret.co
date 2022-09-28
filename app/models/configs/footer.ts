import meta from "@configs/meta"


const footer = () => {

    return {
        favicon: meta().favicon,
        socials: meta().socials,
        navLinks: meta().links,
        copyright: meta().copyright,
        phone: meta().phone,
        email: meta().email
    }
}

export default footer