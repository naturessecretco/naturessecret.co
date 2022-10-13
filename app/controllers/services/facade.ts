import utils from "@utils/index"


const { files, url, rich_text, multi_select, number, isDatabase, getProperties } = utils().notion

const FacadeService = () => {

    const serviceObject = {
        version: Date.now(),
        types: {
            products: {
                name: "🛍️Product",
                shape: (data: any) => {

                    const { Covers, Discount, Name, Price, Value, Tags, SKU, Gumroad, URL, Description } = getProperties(data)

                    return {
                        id: rich_text(Name),
                        name: rich_text(Name),
                        url: url(URL),
                        gumroadURL: url(Gumroad),
                        heading: rich_text(Name),
                        description: rich_text(Description),
                        sku: rich_text(SKU),
                        value: number(Value),
                        price: number(Price),
                        tags: multi_select(Tags),
                        discount: rich_text(Discount),
                        covers: files(Covers),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.products
                    return isDatabase(name, data)
                }
            },

            meta: {
                name: "📐Meta",
                shape: (data: any) => {

                    const { URL, Title, Types } = data.properties

                    return {
                        url: url(URL),
                        title: rich_text(Title) ?? null,
                        types: multi_select(Types),
                    }
                },
                predicate: (data: any) => {
                    const { name } = serviceObject.types.meta
                    return isDatabase(name, data) ?? null
                }
            },
            faqs: {},
            links: {},
            social_media: {},
        },

    }

    return { ...serviceObject }
}

export default FacadeService