import layout from "@configs/layout"
import type { DataPage } from "@typings/DataPage"

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
            title: 'Home to Natures Best Kept Secrets',
            features: {
                heading: 'Natures Secret',
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
        features: [0, 0, 0, 0, 0]

    },
}

export default homePage