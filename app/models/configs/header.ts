import meta from "@configs/meta"

const header = () => {

    return {
        favicon: meta().favicon,
        navLinks: meta().links,
        bannerProps: {
            message: 'Try our Wildcrafted Seamoss Today!',
            url: '/products/wildcrafted-seamoss'
        }
    }
}

export default header