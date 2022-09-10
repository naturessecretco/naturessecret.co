
import layout from "@configs/layout"

const productsPage = {

    init: () => {

        return { ...productsPage.data }

    },

    data: {
        layout: {
            ...layout,
            metaData: {
                pageTitle: 'Products'
            }
        },

    }
}

export default productsPage