import layout from "@configs/layout"
import meta from "@configs/meta"
import benefits from "@db/benefits"
import faqs from "@db/faqs"
import productsDB from "@db/products"
import reviews from "@db/reviews"

const pages = {

    layout: layout,

    home: {

        metaData: {
            pageTitle: 'Home',
        },

        query: {
            gallery: () => {
                
                return {
                    title: 'Testimonials & Reviews',
                    cta: {
                        name: 'Read more',
                        url: 'face'
                    },
                    items: [...reviews]
                }
            },

            mediaRow: () => {
                return {
                    media: [...benefits]
                }
            },

            summary: () => {

                return {
                    title: "Frequently Asked Questions",
                    content: [...faqs],
                    cta: {
                        name: "Learn more here",
                        url: "/benefits"
                    }
                }

            },

            featured: () => {

                return {
                    title: "Best Selling",
                    features: [...productsDB]
                }


            },

            hero: () => {

                return {

                    title: "Natures Secret",
                    socials: meta.socials,
                    cta: {
                        name: "Home to natures best kept secrets."
                    },
                    backgroundCover: "/assets/images/cover.png",
                    features: {
                        heading: "Quick Links to Wellness",
                        links: [
                            {
                                name: "Check out our new products!",
                                url: "/products"
                            },
                            {
                                name: "Frequently Asked Questions",
                            },

                            {
                                name: "Your benefits from SuperFoods",
                            },
                            {
                                name: "About Us"
                            },
                            {
                                name: 'Our Mission'
                            },

                        ]
                    }
                }
            }
        },
    },

    benefits: {},
    mission: {},
    products: {},
    faqs: {},
}

export default pages