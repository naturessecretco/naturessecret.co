import layout from "@configs/layout"
import meta from "@configs/meta"

import { $ProductsSearch } from "@components/ProductsSearch"
import { $Gallery } from "@components/Gallery"
import { $MediaRow } from "@components/MediaRow"
import { $Hero } from "@components/Hero"
import { $Summary } from "@components/Summary"
import { $Featured } from "@components/Featured"

import imagesDB from "@db/images"
import productsDB from "@db/products"



const { getImages } = imagesDB.methods


const pages = (store, pageKey) => {

    const { getProducts } = productsDB

    const productQuery = getProducts(store)

    const heroImage = getImages({
        property: "id",
        value: "home-hero",
        limit: 1,
        type: "local"
    })[0].src


    const pageData = {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {
                hero: {
                    title: 'Home to Natures Best Kept Secrets',
                    socials: meta.socials,
                    covers: productQuery.map(product => ({ src: product.advertisements[0], alt: product.advertisements[0] })),
                    features: {
                        heading: 'Home to Natures Best Kept Secrets',
                        links: [
                            {
                                name: 'Try our Wildcrafted Seamoss',
                                url: '/products'
                            },
                            {
                                name: 'Learn about our Products',
                                url: '/products'
                            },
                            {
                                name: 'Understand the Benefits',
                                url: '/benefits'
                            },
                            {
                                name: 'Learn about our Company',
                                url: '/about'
                            }
                        ]


                    },
                    backgroundCover: heroImage,
                },
                featured: {
                    features: productQuery.map(product => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        cover: product.covers[0],
                        discount: product.discount,
                    })),
                    title: 'Featured Products',

                },
                product: { ...productQuery[0] },
                mediaRow: {
                    media: [...productQuery.map((product) => {
                        return {
                            url: `/products/${product.id}`,
                            description: product.description,
                            title: product.name,
                            cover: {
                                src: product.covers[0],
                                alt: product.covers[0]
                            }

                        }
                    })]
                },
                summary: {
                    title: 'Frequently Asked Questions',
                    content: [
                        {
                            question: 'What is Seamoss?',

                        }
                    ]
                }
            },

        },

        products: {},
        benefits: {},

    }

    return {
        id: 'natures-secret-pages-db',
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }
}

export default pages