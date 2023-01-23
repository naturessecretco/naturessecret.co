import { layout, meta as metaConfig } from "@configs/index"
import { faqs, links, meta, products, social_media } from "@db/index"

const pages = ({ store, pageKey }) => {

    const { getProducts } = products(store)
    const { getPageLinks, getFeatauredLinks } = links(store)
    const { getTag, getCertifications } = meta(store)
    const { getBanner, getHero, getPhoneNumber, getBenefits, getEmailAddress, getDisclaimer, getCopyright } = meta(store)
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
                    covers: {
                        heading: 'Check out these quick links to wellness!',
                        links: getFeatauredLinks()
                    },
                    banner: {
                        image: {
                            src: getHero()?.covers[0].url ?? null
                        }
                    }
                },
                contentGrid: {
                    benefits: {
                        title: 'Your Benefits from SuperFoods',
                        items: getBenefits().map((benefit) => ({
                            ...benefit,
                            cover: {
                                url: benefit?.covers[0]?.url ?? null,
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
                            title: product.name,
                            marketValue: product.value,
                            cover: {
                                src: product.covers[0]?.url,
                                alt: product.covers[0]?.name
                            }
                        })),

                    },
                },
                logoCloud: {
                    title: 'Certified Quality for Wellness.',
                    heading: 'Certificaitons',
                    logos: getCertifications().map((certification) => ({
                        image: {
                            src: certification?.covers[0]?.url ?? null,
                            alt: certification?.covers[0]?.name ?? null
                        },
                        url: '#',
                        name: certification?.name ?? null
                    }))
                },
                product: {

                },
                featuredMedia: {},
                mediaRow: {
                    title: 'Best Sellers',
                    media: getProducts().map((product) => ({
                        cover: {
                            src: product.covers[0]?.url,
                            alt: product.covers[0]?.name
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
        about: {},
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
                    covers: product?.covers,
                    order: {
                        heading: 'Order Now',
                    },
                    ...product
                }))
            },
            data: {

                itemsSearch: {
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
                        cover: product.covers[0],
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
                            url: benefit?.covers[0]?.url ?? null,
                        },
                        title: benefit?.name,
                    })),

                }
            }
        },
    }


    const _object = {
        id: `${title}-${pageKey}`,
        version: Date.now(),
        layout: layout({
            metaData: _data[pageKey].metaData,
           
            header: {
           
                links: getFeatauredLinks(),
                favicon: {
                    image: {
                        src: '/assets/images/logo.png',
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