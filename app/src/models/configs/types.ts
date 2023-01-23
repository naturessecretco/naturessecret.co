import { notion as notionUtilities } from "@utils/index"

export const notion = () => {

    const { files, url, email, phone, formula, icon, rich_text } = notionUtilities()

    const { title, multi_select, number, status, select, isDatabase, getProperties } = notionUtilities()

    const typesObject = {

        variants: {
            heading: "🪦Heading",
            team_member: "🕴🏿Team Member",
            search: "🔎Search",
            tag_line: "🏷️Tag Line",
            featured: "⭐Featured",
            hero: "🖼️Hero",
            links: "📎Link",
            certifications: "🏷Certification",
            benefits: "🙏🏿Benefit",
            phone_number: "☎️Phone Number",
            disclaimer: "⚠️Disclaimer",
            pillar: "💜Pillar",
            page: "📄Page",
            team: "🅰️Team",
            favicon: "🖼️Favicon",
            photo: "🖼️Photo",
            messages: "📩Messages",
            faq: "❓FAQ",
            title: "📛Title",
            video: "📺Video",
            partner: "🫱🏿‍🫲🏿Partner",
            founder: "🪨Founder",
            copyright: "©️Copyright",
            artivism: "🎨Artivism",
            email: "📧Email",
            event: "📅Event",
            impressum: "✒️Impressum",
            banner: "🪧Banner",
            cta: "🔔Call to Action"
        },

        products: {
            name: "🛍️Product",
            shape: (data) => {

                const extractCentralDogmaKeys = ({ data }) => {
                    const { Facebook, Media, Price, Value, Name, URL, Types, Status } = getProperties(data)

                    return {
                        name: title(Name),
                        media: files(Media),
                        value: number(Value),
                        price: formula(Price),
                        status: status(Status),
                        url: url(URL),
                        facebook: url(Facebook),
                        types: multi_select(Types)
                    }

                }

                return extractCentralDogmaKeys({ data })
            },

            predicate: (data) => {
                const { name } = typesObject.products
                return isDatabase(name, data)
            }
        },

        forms: {
            name: "📜Forms",
            shape: (data) => {
                const { Facebook, Name, Media, URL, Types, Status } = getProperties(data)

                const { icon: Icon } = data

                return {
                    name: title(Name),
                    icon: icon(Icon),
                    media: files(Media),
                    status: status(Status),
                    url: url(URL),
                    facebook: url(Facebook),
                    types: multi_select(Types)
                }
            },
            predicate: (data) => {
                return isDatabase(typesObject.forms?.name, data)
            }
        },

        events: {
            name: "🗓️Events",
            shape: (data) => {
                const { Facebook, Name, Media, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    media: files(Media),
                    status: status(Status),
                    facebook: url(Facebook),
                    types: multi_select(Types)
                }
            },
            predicate: (data) => {
                const { name } = typesObject.events
                return isDatabase(name, data)
            }
        },

        media: {
            name: "📷Media",
            shape: (data) => {

                const { Facebook, Name, Media, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    media: files(Media),
                    status: status(Status),
                    facebook: url(Facebook),
                    types: multi_select(Types)
                }
            },
            predicate: (data) => {
                const { name } = typesObject.media
                return isDatabase(name, data)
            }
        },

        meta: {
            name: "📐Meta",
            shape: (data: any) => {

                const { URL, Youtube, Name, Media, Types, Files, Values, Description, Status, Phone, Email } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    description: rich_text(Description),
                    status: status(Status),
                    media: files(Media),
                    phone: phone(Phone),
                    email: email(Email),
                    youtube: url(Youtube),
                    files: files(Files),
                    types: multi_select(Types),
                    values: multi_select(Values),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.meta
                return isDatabase(name, data)
            }
        },

        faqs: {
            name: "❓FAQ",
            shape: (data: any) => {

                const { icon: Icon, properties: { URL, Name, Description, Status, Types } } = data

                return {
                    name: title(Name),
                    icon: icon(Icon),
                    description: rich_text(Description),
                    status: status(Status),
                    url: url(URL),
                    types: multi_select(Types),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.faqs
                return isDatabase(name, data)
            }
        },

        links: {
            name: "📎Links",
            shape: (data: any) => {

                const { properties: { URL, Name, Types }, icon: Icon } = data

                return {
                    url: url(URL),
                    icon: icon(Icon),
                    name: title(Name),
                    types: multi_select(Types),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.links
                return isDatabase(name, data) ?? null
            }
        },

        social_media: {
            name: "📱Social Media",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data?.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = typesObject.social_media
                return isDatabase(name, data)
            }
        }
    }

    return typesObject

}