
const faqs = () => {

    return {
        id: 'faqsDataBase',
        version: Date.now(),
        getFAQs: (store) => {
            return store.filter((data) => {
                return data?.properties?.Type?.select?.name === "❓FAQ"
            }).map((data) => {
                return {
                    answer: data?.properties?.Answer?.rich_text[0]?.plain_text || "",
                    question: data?.properties?.Name?.title[0]?.plain_text,

                }
            })

        }
    }
}

export default faqs

