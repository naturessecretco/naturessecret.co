import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const __DB__ = (store: NotionPageObjectType): DatabaseObjectType => {

    const { variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {

    }

    return dbObject
}

export default __DB__ 
