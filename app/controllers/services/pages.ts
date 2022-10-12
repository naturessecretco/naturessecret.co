import pages from "@models/data/pages"
import NotionService from '@services/notion'
import meta from "@configs/meta"

const PageService = () => {

    const serviceObject = {
        getPage: async (pageKey: string) => {

            const { title: siteTitle } = meta({})

            const { getCentralDogma } = NotionService()

            const centralDogma = (await getCentralDogma()).results

            const { layout, data, id, version } = pages(centralDogma, pageKey ? pageKey : "home")

            const page = {
                id: `${siteTitle}@PagesDatabase`,
                db: id,
                version,
                layout,
                ...data,
            }

            return page

        },

    }

    return { ...serviceObject }

}




export default PageService

