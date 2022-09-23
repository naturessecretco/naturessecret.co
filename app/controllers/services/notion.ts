import { Client } from "@notionhq/client"

const NotionService = {
    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    databases: {
        products: '025fe278cb0f496fb9d0fbd873df8bf6',
    },

    loadAllProducts: async () => {
        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.products,
        })
        return data
    },


}


export default NotionService