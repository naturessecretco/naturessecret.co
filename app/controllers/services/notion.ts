import { Client } from "@notionhq/client"

const NotionService = {
    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),
    interface: {
        notion: `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/db" : `http://localhost:${process.env.PORT || 3002}/api/db`}`,
    },
    databases: {
        central_dogma: 'b70f6b0e58b14ba59a4618e95898b817',
    },
    loadCentralDogma: async () => {
        const { central_dogma } = NotionService.databases
        const response = await NotionService.api.databases.query({
            database_id: central_dogma
        })
        return response
    },

}


export default NotionService