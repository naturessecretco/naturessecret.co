import { Client } from "@notionhq/client"

const NotionService = () => {

    const serviceObject = {
        api: new Client({
            auth: import.meta.env.FACADE_API_KEY ?? process.env.FACADE_API_KEY,
        }),

        secured: {
            central_dogma: import.meta.env.CENTRAL_DOGMA_ID ?? process.env.CENTRAL_DOGMA_ID,
        },

        getCentralDogma: async () => {
            const { api, secured } = serviceObject

            const centralDogma = (await api.databases.query({
                database_id: secured.central_dogma
            }))?.results ?? []

            return centralDogma
        },

    }

    return { ...serviceObject }
}


export default NotionService