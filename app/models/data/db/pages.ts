import layout from "@configs/layout"
import meta from "@configs/meta"

import imagesDB from "@db/images"
import productsDB from "@db/products"
import faqsDB from "@db/faqs"



const { getImages } = imagesDB.methods


const pages = (store, pageKey) => {

    const { getProducts } = productsDB
    const { getFAQs } = faqsDB

    const productQuery = getProducts(store)
    const faqsQuery = getFAQs(store)

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
                        value: product.value,
                        price: product.price,
                        cover: {
                            src: product.covers[0],
                            alt: product.covers[0]
                        },
                        discount: product.discount,
                    })),
                    title: 'Featured Products',

                },
                product: {
                    ...productQuery.map((product) => ({
                        ...product,
                        covers: product.covers.map((cover) => ({ src: cover, alt: cover })),
                        description: product.description,
                        order: {
                            url: product.gumroad,
                        },
                        heading: 'On Sale!'
                    }))[0]
                },
                mediaRow: {
                    media: [...productQuery.map((product) => {
                        return {
                            url: `/products/${product.id}`,
                            description: product.description,
                            title: product.name,
                            cover: {
                                src: product.covers[1],
                                alt: product.covers[1]
                            }

                        }
                    })]
                },
                summary: {
                    title: 'Frequently Asked Questions',
                    content: faqsQuery.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer
                    }))
                }
            },

        },
        mission: {
            metaData: {
                pageTitle: 'Mission'
            },
            data: {

                post: {
                    title: 'Our Mission',
                    cover: '/assets/images/mission.png',
                    content: `We are Nature's Secret and our mission is to provide high-grade natural products to better the world's health! We specialize in producing herbal supplements, vitamins, and minerals, all of which are designed to improve your wellbeing. Whether you're looking for an antioxidant to help protect your cells from aging, or a probiotic to boost your digestive health, we have a product that's perfect for you. We're committed to providing the highest quality ingredients and products possible, and we're confident that you'll love them!`

                }

            }
        },
        products: {
            metaData: {},
            pages: {
                paths: productQuery.map((product) => ({
                    params: {
                        id: product.id
                    }
                })),
                data: productQuery.map((product) => ({
                    ...product,
                    covers: product.covers.map((cover) => ({ src: cover, alt: cover })),
                    order: {

                        url: product.gumroad,
                    }
                }))
            },
            data: {

                productsSearch: {
                    title: 'Our Products',
                    items: productQuery.map((product) => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        order: {
                            url: product.gumroad
                        },
                        value: product.value,
                        price: product.price,
                        cover: product.covers[0],
                        discount: product.discount,

                    }))
                }

            }
        },
        benefits: {
            data: {
                grid: {

                }
            }
        },

    }

    return {
        id: 'natures-secret-pages-db',
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }
}

export default pages