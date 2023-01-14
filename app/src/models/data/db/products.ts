import FacadeService from "@services/facade"
import type { ProductProps } from "@models/typings/Product"

const products = (store: any[]) => {

    const { products } = FacadeService().types

    const databaseObject = {
        id: 'PRODUCTS_DATABASE_ID',
        version: Date.now(),
        getProducts:  () => {
            return store.filter((data) => {
                return (
                    products.predicate(data)
                )
            }).map((data) => {
                return (
                    products.shape(data)
                )
            }).sort()

        }

    }

    return { ...databaseObject }
}

export default products

