import pages from "@db/pages"
import NotionService from '@services/notion'
import meta from "@configs/meta"
const PageService = {

    loadDataPage: (store?: any, pageKey?: string) => {
        return pages({ store, pageKey })
    },

    getPage: async (pageKey: string) => {

        const { title: siteTitle } = meta()

        const { loadDataPage } = PageService
        const { loadCentralDogma } = NotionService

        const centralDogma = (await loadCentralDogma()).results

        const { layout, data, id, version } = loadDataPage(centralDogma, pageKey ? pageKey : "home")


        const page = {
            id: `${siteTitle}-pages`,
            db: id,
            version: version,
            layout: layout,
            ...data,
        }

        return page

    },

}




export default PageService

