import { Client } from "@notionhq/client"
import type { ProductProps } from "@typings/Product"

const NotionService = {

    api: new Client({
        auth: process.env.FACADE_API_KEY,
    }),

    secured: {
        central_dogma: process.env.CENTRAL_DOGMA_ID,
    },

    interface: `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/notion" : `http://localhost:${process.env.PORT || 8080}/api/notion`}`,

    db: {
        PRODUCTS: {
            shape: (data: any): ProductProps => {

                return {
                    id: data.properties.id.rich_text[0].plain_text,
                    key: data.properties.key.rich_text[0].plain_text,
                    version: Date.now(),
                    name: data.properties.name.rich_text[0].plain_text,
                    url: data.properties.url.rich_text[0].plain_text,
                    gumroadURL: data.properties.Gumroad.rich_text[0].plain_text,
                    heading: data.properties.heading.rich_text[0].plain_text,
                    description: data.properties.description.rich_text[0].plain_text,
                    sku: data.properties.SKU.rich_text[0].plain_text,
                    tags: data.properties.tags.rich_text[0].plain_text.split(","),
                    value: data.properties.Value.rich_text[0].plain_text,
                    price: data.properties.Price.rich_text[0].plain_text,
                    discount: data.properties.Discount.rich_text[0].plain_text,
                    covers: data.properties.Covers.files

                }
            },
            predicate: (data: any) => data?.properties?.Type?.select?.name === "📷Media" || false
        },

    },

    loadCentralDogma: async () => {

        const { api, secured } = NotionService

        const centralDogma = await api.databases.query({
            database_id: secured.central_dogma
        })

        return centralDogma
    },

}


export default NotionService