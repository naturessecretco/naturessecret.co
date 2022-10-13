import { images, layout, meta as metaConfig } from "@configs/index"
import { products, meta } from "@db/index"

const pages = ({ store, pageKey }) => {

    const { socials, title } = metaConfig({})

    const { getProducts } = products(store)
    const { getMeta } = meta(store)

    const homeHero = images().find((image) => image.id === "home-hero")

    const pageData = {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {
                hero: {
                    title: 'Home to Natures Best Kept Secrets',
                    socials,
                    test: getMeta(),
                    covers: getMeta(),
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
                    backgroundCover: homeHero.src,
                },
                grid: {
                    items: [
                        {
                            title: 'Bodily Healing',
                            cover: {
                                src: '/assets/images/bodily-healing.svg',
                            }
                        }, {
                            title: 'Natural Immunity',
                            cover: {
                                src: '/assets/images/Immunity.svg',
                            }
                        },
                        {
                            title: 'Sinus Relief',
                            cover: {
                                src: '/assets/images/mucus.svg',
                            }
                        },
                        {
                            title: 'Skin Health & Youthfulness',
                            cover: {
                                src: '/assets/images/skin-health.svg',
                            }
                        }, {
                            title: 'Improved Circulation & Energy',
                            cover: {
                                src: '/assets/images/blood-flow.svg',
                            }
                        }, {
                            title: 'Antioxidants',
                            cover: {
                                src: '/assets/images/antioxidants.svg',
                            }
                        }
                    ]

                },
                featured: {
                    features: getProducts().map(product => ({
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
                    ...getProducts().map((product) => ({
                        ...product,
                        covers: product.covers.map((cover) => ({ src: cover, alt: cover })),
                        description: product.description,

                        heading: 'On Sale!'
                    }))[0]
                },
                mediaRow: {
                    media: [...getProducts().map((product) => {
                        return {
                            url: `/products/${product.id}`,
                            description: product.description,
                            title: product.name,
                            cover: {
                                src: product?.covers[0],
                                alt: product?.covers[0]
                            }

                        }
                    })]
                },
                summary: {
                    title: 'Frequently Asked Questions',
                    content: []
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
            metaData: {
                pageTitle: 'Products'
            },
            pages: {
                paths: getProducts().map((product) => ({
                    params: {
                        id: product.id
                    }
                })),
                data: getProducts().map((product) => ({
                    ...product,
                    covers: product.covers.map((cover) => ({ src: cover, alt: cover })),
                    order: {
                        heading: 'Order Now',
                    }
                }))
            },
            data: {

                productsSearch: {
                    title: 'Our Products',
                    items: getProducts().map((product) => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,

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
                    items: [
                        {
                            title: 'Bodily Healing',
                            cover: {
                                src: '/assets/images/bodily-healing.svg',
                            }
                        }, {
                            title: 'Natural Immunity',
                            cover: {
                                src: '/assets/images/Immunity.svg',
                            }
                        },
                        {
                            title: 'Sinus Relief',
                            cover: {
                                src: '/assets/images/mucus.svg',
                            }
                        },
                        {
                            title: 'Skin Health & Youthfulness',
                            cover: {
                                src: '/assets/images/skin-health.svg',
                            }
                        }, {
                            title: 'Improved Circulation & Energy',
                            cover: {
                                src: '/assets/images/blood-flow.svg',
                            }
                        }, {
                            title: 'Antioxidants',
                            cover: {
                                src: '/assets/images/antioxidants.svg',
                            }
                        }
                    ]

                }
            }
        },
    }


    const pageObject = {
        id: `${title}-${pageKey}`,
        version: Date.now(),
        layout: layout({

            metaData: pageData[pageKey].metaData,
        }),

        data: pageData[pageKey].data
    }

    return { ...pageObject }

}

export default pages