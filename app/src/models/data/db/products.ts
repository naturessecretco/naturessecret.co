import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const products = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, products } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getFeaturedProducts: () => {
            return queryDatabase({
                keys: [variants.featured],
                db: dbObject.db.data,
                batch: true
            })
        },

        getProducts: () => {
            return dbObject.db.data
        },

        db: createDatabase({ ...products, data: store })
    }

    return dbObject
}

export default products

