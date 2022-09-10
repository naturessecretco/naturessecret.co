import layout from '@configs/layout';
import productsDB from '@db/products';

const products = {

    init: () => {
        return { ...products.data }
    },

    data: {
        layout: {
            ...layout,
            metaData: {
                pageTitle: 'Products',
            }
        },
        products: [...productsDB]
    }
}

export default products