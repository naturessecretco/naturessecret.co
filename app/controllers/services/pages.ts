import pages from "@db/pages"
import NotionService from '@services/notion'

const PageService = {

    loadDataPage: (store?: any, pageKey?: string) => {
        return pages(store, pageKey)
    },

    getPage: async (pageKey: string) => {

        const { loadDataPage } = PageService
        const { loadCentralDogma } = NotionService

        const centralDogma = (await loadCentralDogma()).results

        const { layout, data, id, version } = loadDataPage(centralDogma, pageKey ? pageKey : "home")


        const page = {
            id: 'natures-secret-pages',
            db: id,
            version: version,
            layout: layout,
            ...data,
        }

        return page

    },

}




export default PageService

