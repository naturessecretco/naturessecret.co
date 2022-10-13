import FacadeService from "@services/facade"

const meta = (store: any[]) => {

    const { meta } = FacadeService().types

    const databaseObject = {
        id: 'META_DATABASE_ID',
        version: Date.now(),
        getTag: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('🏷️Tag')) ?? null
        },
        getBenefits: () => {
             return databaseObject.getMeta().filter((meta) => meta?.types?.includes('🙏🏿Benefit')) ?? null
        },
        getPhoneNumber: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('☎️Phone Number')) ?? null
        },
        getEmailAddress: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('✉️Email Address')) ?? null
        },
        getCopyrights: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('©️Copyright')) ?? null

        },
        getDisclaimer: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('⚠️Disclaimer')) ?? null
        },
        getBanner: () => {
            return databaseObject.getMeta().find((meta) => meta.types.includes('🪧Banner')) ?? null
        },
        getMeta: () => {
            return (store.filter((data) => {
                return (
                    meta.predicate(data)
                )
            })).map((data) => {
                return (
                    meta.shape(data)
                )
            })

        }

    }

    return { ...databaseObject }
}

export default meta

