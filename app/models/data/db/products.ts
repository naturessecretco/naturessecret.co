import FacadeService from "@controllers/services/facade"


const products = (store: any[]) => {

    const { products } = FacadeService().types

    const databaseObject = {
        id: 'PRODUCTS_DATABASE_ID',
        version: Date.now(),
        getProducts: () => {
            return store.filter((data) => {
                return (
                    products.predicate(data)
                )
            }).map((data) => {
                return (
                    products.shape(data)
                )
            })

        }

    }

    return { ...databaseObject }
}

export default products

