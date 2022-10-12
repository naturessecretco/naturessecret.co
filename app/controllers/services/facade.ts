import utils from "@utils/index"

const FacadeService = () => {

    const { files, url, rich_text, multi_select, isDatabase } = utils().notion

    const serviceObject = {
        version: Date.now(),
        types: {
            products: {
                name: "products",
                shape: (data: any) => {

                    const { Covers, Discount, Name, Price, Value, Tags, SKU, Gumroad, URL } = data.properties

                    return {
                        id: data.properties.id.rich_text[0].plain_text,
                        name: rich_text(Name),
                        url: data.properties.url.rich_text[0].plain_text,
                        gumroadURL: data.properties.Gumroad.rich_text[0].plain_text,
                        heading: data.properties.heading.rich_text[0].plain_text,
                        description: data.properties.description.rich_text[0].plain_text,
                        sku: data.properties.SKU.rich_text[0].plain_text,
                        tags: data.properties.tags.rich_text[0].plain_text.split(","),
                        value: data.properties.Value.rich_text[0].plain_text,
                        price: data.properties.Price.rich_text[0].plain_text,
                        discount: rich_text(Discount),
                        covers: files(Covers),

                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.products
                    return isDatabase(name, data)
                }
            },

            meta: {},
            faqs: {},
            links: {},
            social_media: {},
        },

    }


    return { ...serviceObject }
}

export default FacadeService