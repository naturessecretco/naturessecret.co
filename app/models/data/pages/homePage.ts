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

            title: 'Home to Natures Best Kept Secrets'

        }
    }
}

export default homePage