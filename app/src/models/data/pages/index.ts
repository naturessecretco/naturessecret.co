import { layout, meta as metaConfig } from "@configs/index"
import { faqs, links, meta, products, social_media } from "@db/index"

const pages = ({ store, pageKey }) => {

    const { getProducts, getFeaturedProducts } = products(store)
    const { getPageLinks, getFeatauredLinks } = links(store)
    const { getTagLine, getCertifications, getDisclaimer, getIngredients, getCopyright, getFavicon } = meta(store)
    const { getBanner, getHero, getImpressum, getPhoneNumber, getBenefits, getEmailAddress } = meta(store)
    const { getFAQs } = faqs(store)
    const { getSocialMedia } = social_media(store)
    const { title } = metaConfig({})

    const _data = {
        home: {
            metaData: {
                pageTitle: 'Home'
            },
            data: {
                hero: {
                    title: "Welcome to Nature's Secret",
                    heading: "New Wildcrafted Seamoss!",
                    subHeading: "Home to nature's best kept secrets",
                    socials: getSocialMedia(),
                    features: getProducts().map((product) => (product?.advertisements)).flat(),
                    banner: {
                        image: {
                            src: getHero()?.media[0]?.url ?? null
                        }
                    }
                },
                contentGrid: {
                    benefits: {
                        title: 'Your Benefits from SuperFoods',
                        items: getBenefits().map((benefit) => ({
                            ...benefit,
                            cover: {
                                url: benefit?.media[0]?.url ?? null,
                            },
                            title: benefit?.name,
                        })),

                    },

                    ingredients: {
                        title: 'Our Natural Ingredients',
                        items: getIngredients().map((benefit) => ({
                            ...benefit,
                            cover: {
                                url: benefit?.media[0]?.url ?? null,
                            },
                            title: benefit?.name,
                        })),

                    }
                },
                productsRow: {
                    bestSellers: {
                        title: 'Best Sellers.',
                        products: getProducts().map((product) => ({
                            ...product,
                            price: product.price,
                            id: product.id,
                            cover: {
                                src: product.media[0].url
                            }
                        }))

                    },
                },
                logoCloud: {
                    title: 'Certified Quality for Wellness.',
                    heading: 'Certificaitons',
                    logos: getCertifications().map((certification) => ({
                        image: {
                            src: certification?.media[0]?.url ?? null,
                            alt: certification?.media[0]?.name ?? null
                        },
                        url: '#',
                        name: certification?.name ?? null
                    }))
                },
                product: getFeaturedProducts().map((product) => ({
                    ...product,
                    cover: {
                        src: product.media[0].url,
                        alt: product.name
                    }
                }))[0],
                featuredMedia: {},
                mediaRow: {
                    title: 'Best Sellers',
                    media: getProducts().map((product) => ({
                        cover: {
                            src: product.media[0]?.url,
                            alt: product.media[0]?.name
                        },
                        url: product?.url,
                        title: product?.name,
                        description: product?.description,
                    }))
                },
                summary: {
                    title: 'Frequently Asked Questions',
                    details: getFAQs().map((faq) => ({
                        name: faq.name,
                        description: faq.description,
                    }))
                }
            },

        },
        resources: {
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
        about: {
            metaData: {
                pageTitle: "About"
            },
            data: {

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
                    id: product?.id ?? null,
                    name: product?.name ?? null,
                    media: product?.media,
                    order: {
                        heading: 'Order Now',
                    },
                    ...product
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
                        order: {
                            url: product.gumroad
                        },
                        cover: {
                            src: product.media[0].url,
                            alt: product.name
                        },
                        discount: product.discount,
                        ...product

                    }))
                }

            }
        },
        benefits: {
            data: {
                grid: {
                    title: 'Your Benefits from SuperFoods',
                    items: getBenefits().map((benefit) => ({
                        ...benefit,
                        cover: {
                            url: benefit?.media[0]?.url ?? null,
                        },
                        title: benefit?.name,
                    })),

                }
            }
        },
        ingredients: {},
        blog: {}
    }


    const _object = {
        id: `${title}-${pageKey}`,
        version: Date.now(),
        layout: layout({
            metaData: _data[pageKey].metaData,

            footer: {
                tagLine: getTagLine().description,
                copyright: getCopyright().description,
                impressum: getImpressum().description,
                favicon: {
                    image: {
                        src: getFavicon()?.media[0]?.url,
                        alt: "Nature's Secret"
                    },
                    url: '/'
                },
                links: {
                    primary: {
                        title: "Products",
                        links: getProducts().map((product) => ({
                            ...product
                        }))
                    },
                    secondary: {
                        title: "Pages",
                        links: getPageLinks().map((link) => ({
                            ...link
                        }))

                    },
                    tertiary: {
                        title: "Information"
                    }
                }
            },

            contacts: {
                title: "Get in Touch",

            },

            header: {

                links: getPageLinks().map((link) => ({
                    url: link.url,
                    name: link.name
                })),
                favicon: {
                    image: {
                        src: getFavicon()?.media[0]?.url,
                        alt: "Nature's Secret"
                    },
                    url: '/'
                }
            },


        }),

        data: _data[pageKey ? pageKey : "home"].data,
        pages: _data[pageKey ? pageKey : "home"]?.pages ?? null,
    }

    return _object

}

export default pages