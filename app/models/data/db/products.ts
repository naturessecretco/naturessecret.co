

const productsDB = {
    id: 'productsDB',
    version: Date.now(),
    interface: {
        productsAPI: `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/products" : `http://localhost:${process.env.PORT || 3000}/api/products`}`
    },
    methods: {
        getProducts: () => {

            const fetcher = async () => fetch(productsDB.interface.productsAPI, {
                method: 'GET',
            })

            const productsFetch = (async () => await fetcher()
                .then(res => res.json())
                .then(data => data.map(data => data.properties))
                .then(data => Array.from(data.map(data => ({
                    cover: data.Advertisements?.files[0].file.url || null,
                    price: data.Price.number || '',
                    name: data.Name.title[0].plain_text || '',
                    description: data.Description.rich_text[0].plain_text || '',
                })))))()

            return productsFetch
        }
    }
}

export default productsDB

