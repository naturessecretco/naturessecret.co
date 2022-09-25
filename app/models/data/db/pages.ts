import layout from "@configs/layout"
import meta from "@configs/meta"

import { $ProductsSearch } from "@components/ProductsSearch"
import { $Gallery } from "@components/Gallery"
import { $MediaRow } from "@components/MediaRow"
import { $Hero } from "@components/Hero"
import { $Summary } from "@components/Summary"
import { $Featured } from "@components/Featured"

import imagesDB from "@db/images"
import faqsDB from "@db/faqs"
import productsDB from "@db/products"


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
                        const products = await productsDB.methods.private.fetchProducts()
                        return products.map((product: any, index) => {

                            return {
                                id: product.id,
                                price: product.price,
                                description: product.description,
                                cover: {
                                    src: product.covers[1],
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
                        const products = await productsDB.methods.private.fetchProducts()
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
                    socials: meta.socials,
                    covers: async () => {
                        const products = await productsDB.methods.private.fetchProducts()
                        return products.map((product: any) => {
                            return {
                                src: product?.advertisement,
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
                    cta: {
                        name: 'Learn More',
                        url: ''
                    },
                    content: async () => {
                        const faqs = await faqsDB.methods.getFAQs()
                        return faqs
                    }
                }
            }
            ]
        },

        products: {
            pages: {},
            data: [
                {
                    component: $ProductsSearch,
                    props: {}
                }
            ]
        },
        faqs: {},
        benefits: {
            data: [
                {
                    component: $Summary,
                    props: {}
                }
            ]
        },
        mission: {
            data: [
                {
                    component: $Summary,
                    props: {}
                }
            ]
        },
        blog: {}
    }
}


export default pages