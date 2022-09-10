import meta from "@configs/meta"

const header = {

    init: () => {

        return { ...header.data }
    },

    data: {
        favicon: meta.favicon,
        navLinks: meta.links,
        bannerProps: {
            message: 'Try our Wildcrafted Seamoss Today!'
        }
    }
}

export default header