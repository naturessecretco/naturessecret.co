import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const links = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants, links } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

        getPageLinks: () => {
            return queryDatabase({
                keys: [variants.page],
                db: dbObject.db.data,
                batch: true
            })
        },

        getInformationLinks: () => {
            return queryDatabase({
                keys: [variants.information],
                db: dbObject.db.data,
                batch: true
            })
        },
        getFeatauredLinks: () => {
            return queryDatabase({
                keys: [variants.links],
                db: dbObject.db.data,
                batch: true
            })
        },


        db: createDatabase({ ...links, data: store })

    }

    return dbObject
}

export default links 
