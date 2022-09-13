import layout from "@configs/layout"
import type { DataPage } from "@typings/DataPage"
import meta from "@configs/meta"
import productsDB from "@db/products"
import benefits from "@db/benefits"


const homePage: DataPage = {

    init: () => {
        return { ...homePage.data }
    },

    data: {

        layout: {
            ...layout,
            metaData: {
                pageTitle: 'Home Page',
            }
        },


        mediaRow: {
            media: [...benefits]

        },
        hero: {
            title: 'Home to Natures Best Kept Secret',
            socials: meta.socials,
            features: {
                heading: 'Home to Natures Best Kept Secret',
                links: [
                    {
                        name: 'Check out our new products!',
                        url: '/products'
                    },
                    {
                        name: 'Frequently Asked Questions',
                    },
                    {
                        name: 'About our mission'
                    },
                    {
                        name: 'Frequently Asked Questions',
                    },
                    {
                        name: 'About our mission'
                    }
                ]
            }
        },

       
        featured: {
            title: 'Best Selling',
            features: [...productsDB]
        }

    },
}

export default homePage