import meta from "@configs/meta"

const header = {

    init: () => {

        return { ...header.data }
    },

    data: {
        favicon: meta.favicon,
        navLinks: meta.links
    }
}

export default header