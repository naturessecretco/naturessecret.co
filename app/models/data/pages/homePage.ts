import layout from "@configs/layout"
import type { DataPage } from "@typings/DataPage"
import meta from "@configs/meta"
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

        hero: {
            title: 'Home to Natures Best Kept Secret',
            socials: meta.socials,
            features: {
                heading: 'Home to Natures Best Kept Secret',
                links: [
                    {
                        name: 'Our Missions'
                    },
                    {
                        name: 'Our Products'
                    },
                    {
                        name: 'Our Company'
                    }
                ]
            }
        },

        logoRow: {

        },
        featured: {
            title: 'Best Selling'
        }

    },
}

export default homePage