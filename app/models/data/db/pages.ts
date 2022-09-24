import layout from "@configs/layout"

import { $Gallery } from "@components/Gallery"
import { $MediaRow } from "@components/MediaRow"
import { $Hero } from "@components/Hero"
import { $Summary } from "@components/Summary"

import { $Featured } from "@components/Featured"

import imagesDB from "@db/images"
import productsDB from "./products"


const pages = {
    id: 'natures-secret-pages',
    version: Date.now(),
    layout: layout,
    pages: {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: [{
                component: $Gallery,
                props: {
                    items: "",
                    title: '',
                    cta: '',
                }
            },
            {
                component: $Featured,
                props: {
                    title: 'Featured Products',
                    cta: {
                        name: 'Show Now',
                        url: '/products'
                    },
                    features: async () => {
                        const products = await productsDB.methods.getProducts()
                        return products.map((product: any, index) => {

                            return {
                                id: product.name,
                                price: product.price,
                                cover: {
                                    src: product.cover,
                                    alt: product.name
                                }
                            }
                        })
                    }
                }
            },
            {
                component: $MediaRow,
                props: {
                    media: async () => {
                        const products = await productsDB.methods.getProducts()
                        return products.map((product: any, index) => {
                            return {
                                title: product.name,
                                description: product.description,
                                covers: {
                                    src: product.cover,
                                    alt: `Product ${index + 1}`
                                }
                            }
                        })

                    },
                }
            },

            {
                component: $Hero,
                props: {
                    title: 'Home to Natures Best Kept Secrets',
                    covers: async () => {
                        const products = await productsDB.methods.getProducts()
                        return products.map((product: any) => {
                            return {
                                src: product?.cover,
                            }
                        })
                    },
                    backgroundCover: () => {
                        const { getImages } = imagesDB.methods
                        const heroImage = getImages({ property: "id", value: "home-hero", limit: 1, type: "local" })[0].src
                        return heroImage
                    },
                }
            },
            {
                component: $Summary,
                props: {
                    title: 'Frequently Asked Questions',
                    content: async () => {
                    }
                }
            }
            ]
        },

        products: {
            pages: {},
            data: []
        },
        faqs: {},
        benefits: {},
        mission: {},
        blog: {}
    }
}


export default pages