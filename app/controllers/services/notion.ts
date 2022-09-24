import { Client } from "@notionhq/client"

const NotionService = {
    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),
    interface: {
        products:  `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/products" : `http://localhost:${process.env.PORT || 3000}/api/products`}`,
        faqs:  `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/faqs" : `http://localhost:${process.env.PORT || 3000}/api/faqs`}`

    },
    databases: {
        products: '025fe278cb0f496fb9d0fbd873df8bf6',
        faqs: '15b32144605c4697b38de96e8d013bd6'
    },

    loadAllProducts: async () => {
        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.products,
        })
        return data
    },

    loadAllFAQs: async () => {
        const data = await NotionService.api.databases.query({
            database_id: NotionService.databases.faqs,
        })
        
        return data
    },
    


}


export default NotionService