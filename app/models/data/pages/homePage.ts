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

        }
    }
}

export default homePage