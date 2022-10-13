import { images, layout, meta as metaConfig } from "@configs/index"
import { products, meta, links, faqs, social_media } from "@db/index"

const pages = ({ store, pageKey }) => {

    const { getProducts } = products(store)
    const { getBanner, getDisclaimer, getCopyrights, getTag } = meta(store)
    const { getLinks } = links(store)
    const { getFAQs } = faqs(store)
    const { getSocialMedia } = social_media(store)


    const { title } = metaConfig({})
    const homeHero = images().find((image) => image.id === "home-hero")

    const pageData = {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {
                hero: {
                    title: 'Welcome to our store',
                    socials: getSocialMedia(),
                    covers: getProducts(),
                    features: {
                        heading: 'Home to Natures Best Kept Secrets',
                        links: getLinks()
                    },
                    backgroundCover: homeHero.url,
                },
                grid: {
                    items: [

                    ]

                },
                featured: {
                    features: getProducts().map((product) => ({
                        ...product,
                        cover: {
                            src: product.covers[0].url,
                            alt: product.covers[0].name
                        }
                    })),
                    title: 'Featured Products',

                },
                product: getProducts()[0],
                mediaRow: {
                    media: [...getProducts().map((product) => {
                        return {
                            url: `/products/${product.id}`,
                            description: product.description,
                            title: product.name,
                            cover: {
                                url: product?.covers[0],
                                alt: product?.covers[0]
                            }

                        }
                    })]
                },
                summary: {
                    title: 'Frequently Asked Questions',
                    content: getFAQs()
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
                    covers: product.covers.map((cover) => ({ url: cover.url, alt: cover.name })),
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
                                url: '/assets/images/bodily-healing.svg',
                            }
                        }, {
                            title: 'Natural Immunity',
                            cover: {
                                url: '/assets/images/Immunity.svg',
                            }
                        },
                        {
                            title: 'Sinus Relief',
                            cover: {
                                url: '/assets/images/mucus.svg',
                            }
                        },
                        {
                            title: 'Skin Health & Youthfulness',
                            cover: {
                                url: '/assets/images/skin-health.svg',
                            }
                        }, {
                            title: 'Improved Circulation & Energy',
                            cover: {
                                url: '/assets/images/blood-flow.svg',
                            }
                        }, {
                            title: 'Antioxidants',
                            cover: {
                                url: '/assets/images/antioxidants.svg',
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

            footer: {
                socials: getSocialMedia().map((social) => ({
                    url: social?.url
                })),

                navLinks: getLinks().map((link) => ({
                    url: link?.url,
                    name: link?.name
                })),

                copyrights: getCopyrights().values.map((copyright) => ({
                    text: copyright,
                })),

                tag: {
                    message: getTag()?.values[0],
                    url: getTag()?.url
                },
                message: {
                    text: getDisclaimer().description,
                    url: getDisclaimer().url,
                },

                phone: '800800800',
                email: 'info',

                favicon: {
                    image: {
                        url: '/assets/images/logo.png',
                        alt: 'natures-secret-logo'
                    },
                    url: '/'
                }
            },

            header: {
                banner: {
                    message: getBanner().title,
                    url: getBanner().url,
                },
                links: getLinks(),
                favicon: {
                    image: {
                        url: '/assets/images/logo.png',
                    },
                    url: ''
                }
            },

            metaData: pageData[pageKey].metaData,
        }),

        data: pageData[pageKey ? pageKey : "home"].data
    }

    return { ...pageObject }

}

export default pages