import NotionService from "@services/notion"


const productsDB = {
    id: 'productsDB',
    version: Date.now(),

    methods: {
        getProducts: async () => {

            const { products } = NotionService.interface

            const fetcher = async () => fetch(products, {
                method: 'GET',
            })

            const productsFetch = (async () => await fetcher()
                .then(res => res.json())
                .then(data => data.map(data => data.properties))
                .then(data => Array.from(data.map(data => ({
                    advertismsent: data.Advertisements?.files[0].file.url || null,
                    price: data.Price.number || '',
                    covers: data.Covers.files.map((file: any) => file.file.url),
                    name: data.Name.title[0].plain_text || '',
                    description: data.Description.rich_text[0].plain_text || '',
                })))))()

            return productsFetch
        }
    }
}

export default productsDB

