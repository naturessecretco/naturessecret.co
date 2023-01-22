import { notion as notionUtilities } from "@utils/index"

export const notion = () => {
    const { files, url, email, phone, formula, icon, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } = notionUtilities()

    const typesObject = {

        variants: {
            heading: "🪦Heading",
            team_member: "🕴🏿Team Member",
            search: "🔎Search",
            pillar: "💜Pillar",
            team: "🅰️Team",
            favicon: "🖼️Favicon",
            photo: "🖼️Photo",
            messages: "📩Messages",
            faqs: "❓FAQ",
            memberships: "🧑🏿‍🧑🏿‍🧒🏿Memberships",
            title: "📛Title",
            video: "📺Video",
            partners: "🫱🏿‍🫲🏿Partners",
            founder: "🪨Founder",
            copyright: "📜Copyright",
            artivism: "🎨Artivism",
            email: "📧Email",
            event: "📅Event",
            impressum: "✒️Impressum",
            banner: "🪧Banner",
            cta: "🔔Call to Action"
        },

        estore: {
            name: "Store",
            shape: (data) => { },
            predicate: (data) => { }
        },


        partners: {
            name: "🫱🏿‍🫲🏿Partners",
            shape: (data) => {
                const { Facebook, Media, Name, Covers, URL, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    media: files(Media),
                    covers: files(Covers),
                    status: status(Status),
                    url: url(URL),
                    facebook: url(Facebook),
                    types: multi_select(Types)
                }
            },
            predicate: (data) => {
                const { name } = typesObject.partners
                return isDatabase(name, data)
            }
        },

        forms: {
            name: "📜Forms",
            shape: (data) => {
                const { Facebook, Name, Covers, URL, Types, Status } = getProperties(data)

                const { icon: Icon  } = data

                return {
                    name: title(Name),
                    icon: icon(Icon),
                    covers: files(Covers),
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

                const { Facebook, Name, Media, Covers, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    media: files(Media),
                    covers: files(Covers),
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
        memberships: {
            name: "👥Memberships",
            shape: (data) => {
                const { Facebook, Actions, Name, Description, Values, Price, Covers, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    description: rich_text(Description),
                    actions: multi_select(Actions),
                    price: number(Price),
                    values: multi_select(Values),
                    covers: files(Covers),
                    status: status(Status),
                    facebook: url(Facebook),
                    types: multi_select(Types)
                }
            },
            predicate: (data) => {
                const { name } = typesObject.memberships
                return isDatabase(name, data)
            }
        },
        team: {
            name: "🅰️Team",
            shape: (data: any) => {

                const { Facebook, Name, Media, Values, Types, Status } = getProperties(data)

                return {
                    name: title(Name),
                    values: multi_select(Values),
                    types: multi_select(Types),
                    media: files(Media),
                    status: status(Status),
                    facebook: url(Facebook),
                }
            },

            predicate: (data: any) => {

                const { name } = typesObject.team

                return isDatabase(name, data)

            }
        },
        meta: {
            name: "📐Meta",
            shape: (data: any) => {

                const { URL, Youtube, Title, Name, Covers, Types, Files, Values, Description, Status, Phone, Email } = data.properties

                return {
                    url: url(URL),
                    title: select(Title),
                    name: title(Name),
                    description: rich_text(Description),
                    status: status(Status),
                    covers: files(Covers),
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
            name: "❓FAQs",
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

    return { ...typesObject }

}