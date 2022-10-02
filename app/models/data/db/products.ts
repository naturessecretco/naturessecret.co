import meta from "@configs/meta"

const products = () => {

    return {
        id: 'PRODUCTS_DATABSE',
        version: `[Natures Secrets: Products]: ${Date.now()}`,
        getProducts: (store) => {
            return store.filter((data) => {
                return data?.properties?.Type?.select?.name === "🛍️Product"
            }).map((data) => {
                return {
                    id: data?.properties?.ID?.rich_text[0]?.plain_text || "",
                    name: data?.properties?.Name?.title[0]?.plain_text,
                    description: data?.properties?.Description?.rich_text[0].text.content,
                    gumroad: data?.properties?.Gumroad?.url,
                    value: data?.properties?.Value?.number,
                    price: data?.properties?.Price?.formula.number,
                    advertisements: data?.properties?.Advertisements?.files.map(f => f.file.url),
                    covers: data?.properties?.Covers?.files.map(f => f.file.url),
                    discount: data?.properties?.Discount?.number,
                }
            })

        }

    }
}

export default products

