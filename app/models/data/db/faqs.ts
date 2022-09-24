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

            const { faqs } = NotionService.interface

            const fetcher = async () => fetch(faqs, {
                method: 'GET',
            })

            let faqsFetch = (async () => await fetcher()
                .then(res => res.json())
                .then(data => data.map(data => data.properties))
                .then(data => Array.from(data.map(data => ({
                    answer: data.Answer?.rich_text || null,
                    question: data.Name?.rich_text || null,
                })))))()

            return faqsFetch

        }


    }
}

export default faqsDB

