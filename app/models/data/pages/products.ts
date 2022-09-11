import footer from "@configs/footer";
import header from "@configs/header";
import productsDB from '@db/products';



const products = {

    init: () => {
        return { ...products.data }
    },

    data: {
        layout: {
            header: header.init(),
            footer: footer.init(),
            metaData: {
                pageTitle: 'Products',
            }
        },
        products: [...productsDB]
    }
}

export default products