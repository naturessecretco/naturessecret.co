import NotionService from "@controllers/services/notion"


const faqsDB = {
    id: 'productsDB',
    version: Date.now(),
    methods: {

        getFAQs: async ({ limit }) => {

            const { faqs } = NotionService.interface

            const results = await fetch(faqs, { method: 'GET' }).then(res => res.json())

            return results

        }


    }
}

export default faqsDB

