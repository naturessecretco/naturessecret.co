
import footer from "@configs/footer"
import header from "@configs/header"
import products from "@db/products"

const productsPage = {

    init: () => {

        return { ...productsPage.data }

    },

    data: {
        layout: {
          header: header.init(),
          footer: footer.init(),
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