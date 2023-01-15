import { Client } from "@notionhq/client"

const NotionService = () => {

    const serviceObject = {

        api: new Client({
            auth: import.meta.env.FACADE_API_KEY,
        }),

        secured: {
            central_dogma: import.meta.env.CENTRAL_DOGMA_ID,
        },

        getCentralDogma: async () => {

            const queryCentralDogma = async ({ cursor, aggResults }: { cursor?: string | undefined, aggResults?: any[] }): Promise<any> => {
                const { api, secured } = serviceObject

                let aggregateResults: any[] = []

                const { has_more, next_cursor, results } = await api.databases.query({
                    database_id: secured.central_dogma as string,
                    page_size: 100,
                    start_cursor: cursor,
                })

                aggregateResults.push(...results, ...aggResults as any[])

                if (!has_more) {
                    return aggregateResults
                } else {
                    return queryCentralDogma({ cursor: next_cursor as string, aggResults: aggregateResults })
                }
            }

            return await queryCentralDogma({ cursor: undefined, aggResults: [] })
        },

    }

    return serviceObject
}


export default NotionService
