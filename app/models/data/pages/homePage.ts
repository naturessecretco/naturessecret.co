import layout from "@configs/layout"
import type { DataPage } from "@typings/DataPage"
import meta from "@configs/meta"
import productsDB from "@db/products"
import benefits from "@db/benefits"
import faqs from "@db/faqs"
import reviews from "@db/reviews"


const homePage: DataPage = {

    init: () => {
        return { ...homePage.data }
    },

    data: {

        layout: {
            ...layout,
            metaData: {
                pageTitle: "Home Page",
            }
        },
        gallery: {
            title: 'Testimonials & Reviews',
            cta: {
                name: 'Read more',
                url: 'face'
            },
            items: [...reviews]
        },

        mediaRow: {
            media: [...benefits]

        },

        summary: {
            title: "Frequently Asked Questions",
            content: [...faqs],
            cta: {
                name: "Learn more here",
                url: "/benefits"
            }
        },
        hero: {
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
        },


        featured: {
            title: "Best Selling",
            features: [...productsDB],

        }

    },
}

export default homePage