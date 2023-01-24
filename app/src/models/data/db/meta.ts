import FacadeService from "@services/facade"
import { collections } from "@utils/index"
import type { NotionPageObjectType } from "@typings/Notion"
import type { DatabaseObjectType } from "@typings/Data"

const meta = (store: NotionPageObjectType): DatabaseObjectType => {

    const { meta, variants } = FacadeService().types.notion

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {
        getCertifications: () => {
            return queryDatabase({
                keys: [variants.certifications],
                db: dbObject.db.data,
                batch: true
            })
        },
        getTagLine: () => {
            return queryDatabase({
                keys: [variants.tag_line],
                db: dbObject.db.data,
                batch: false
            })
        },
        getFavicon: () => {
            return queryDatabase({
                keys: [variants.favicon],
                db: dbObject.db.data,
                batch: false
            })
        },
        getHero: () => {
            return queryDatabase({
                keys: [variants.hero],
                db: dbObject.db.data,
                batch: false
            })
        },
        getBenefits: () => {
            return queryDatabase({
                keys: [variants.benefits],
                db: dbObject.db.data,
                batch: true
            })
        },
        getPhoneNumber: () => {
            return queryDatabase({
                keys: [variants.phone_number],
                db: dbObject.db.data,
                batch: false
            })
        },
        getEmailAddress: () => {
            return queryDatabase({
                keys: [variants.email],
                db: dbObject.db.data,
                batch: false
            })
        },
        getCopyright: () => {
            return queryDatabase({
                keys: [variants.copyright],
                db: dbObject.db.data,
                batch: false
            })
        },

        getDisclaimer: () => {
            return queryDatabase({
                keys: [variants.disclaimer],
                db: dbObject.db.data,
                batch: false
            })
        },

        getImpressum: () => {
            return queryDatabase({
                keys: [variants.impressum],
                db: dbObject.db.data,
                batch: false
            })
        },
        getBanner: () => {
            return queryDatabase({
                keys: [variants.banner],
                db: dbObject.db.data,
                batch: false
            })
        },

        getMeta: () => {
            return dbObject.db.data
        },

        db: createDatabase({ ...meta, data: store })
    }

    return dbObject
}


export default meta


