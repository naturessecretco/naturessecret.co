
import layout from "@configs/layout"
import products from "@db/products"

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

        productsSearch: {

            title: 'Explore Our Products',
            items: products,
            tags: ["Seamoss", "Honey", "Specials", "Gifts", "Bundles", "All Products"]
        }

    }
}

export default productsPage