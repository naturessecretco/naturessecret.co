import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const faqs = (store: NotionPageObjectType): DatabaseObjectType => {

    const { faqs } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getFAQs: () => {
            return dbObject.db.data
        },

        db: createDatabase({ ...faqs, data: store })


    }
    return dbObject
}

export default faqs

