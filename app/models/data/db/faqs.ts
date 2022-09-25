import NotionService from "@services/notion"

export type FAQ = {
    answer?: string,
    question?: string,
}

export type FAQs = {
    faqs: FAQ[]
}

const faqsDB = {
    id: 'productsDB',
    version: Date.now(),
    methods: {

        getFAQs: async () => {

            const { notion } = NotionService.interface

            const fetcher = async () => fetch(notion, {
                method: 'GET',
            })

            let faqsFetch = (async () => await fetcher()
                .then(res => res.json())
                .then(data => data.map(data => data.properties))
                .then(data => data.filter((data) => data.Type.select.name === "❓FAQ"))
                .then(data => Array.from(data.map(data => ({
                    answer: data.Answer?.rich_text[0].plain_text || "null",
                    question: data.Name?.rich_text[0].plain_text || "null",
                })))))()

            return faqsFetch

        }


    }
}

export default faqsDB

