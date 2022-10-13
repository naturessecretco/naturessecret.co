import pages from "@models/data/pages"
import NotionService from '@services/notion'

const PageService = () => {

    const serviceObject = {

        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()

            const CentralDogma = (await getCentralDogma())

            const { layout, data, id, version } = pages({ store: CentralDogma, pageKey })

            const pageObject = {
                id,
                version,
                layout,
                data,
            }

            return { ...pageObject }

        },

    }

    return { ...serviceObject }

}




export default PageService

