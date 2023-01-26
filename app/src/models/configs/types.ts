import { notion as notionUtilities } from "@utils/index"
import { collections as collectionsUtilities } from "@utils/index"

export const notion = () => {


    const { isDatabase } = notionUtilities()

    const { extractCentralDogmaKeys } = collectionsUtilities()


    const variants = {
        heading: "#️⃣Heading",
        team_member: "🕴🏿Team Member",
        search: "🔎Search",
        tag_line: "🏷️Tag Line",
        featured: "⭐Featured",
        ingredient: "🔪Ingredient",
        hero: "🖼️Hero",
        links: "📎Link",
        certifications: "🏷Certification",
        benefits: "🙏🏿Benefit",
        phone_number: "☎️Phone Number",
        contact: "📞Contact",
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
        meta: "📐Meta",
        founder: "🪨Founder",
        copyright: "©️Copyright",
        artivism: "🎨Artivism",
        email: "📧Email",
        event: "📅Event",
        social_media: "📱Social Media",
        impressum: "✒️Impressum",
        banner: "🪧Banner",
        cta: "🔔Call to Action",
        events: "🗓️Events",
        products: "🛍️Products",
        forms: "📜Forms"
    }


    const typesObject = {

        products: {
            name: variants.products,
            shape: (data) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data) => {
                return isDatabase(variants.products, data)
            }
        },

        forms: {
            name: variants.forms,
            shape: (data) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data) => {
                return isDatabase(variants.forms, data)
            }
        },

        events: {
            name: variants.events,
            shape: (data) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data) => {
                return isDatabase(variants.events, data)
            }
        },

        media: {
            name: "📷Media",
            shape: (data) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data) => {
                const { name } = typesObject.media
                return isDatabase(name, data)
            }
        },

        meta: {
            name: "📐Meta",
            shape: (data: any) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data: any) => {
                const { name } = typesObject.meta
                return isDatabase(name, data)
            }
        },

        faqs: {
            name: "❓FAQ",
            shape: (data: any) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data: any) => {
                const { name } = typesObject.faqs
                return isDatabase(name, data)
            }
        },

        links: {
            name: "📎Links",
            shape: (data: any) => {
                return extractCentralDogmaKeys({ data })

            },
            predicate: (data: any) => {
                return isDatabase(typesObject.links.name, data) ?? null
            }
        },

        social_media: {
            name: "📱Social Media",
            shape: (data: any) => {
                return extractCentralDogmaKeys({ data })
            },
            predicate: (data: any) => {
                return isDatabase(typesObject.social_media.name, data)
            }
        }
    }

    return { ...typesObject, variants }

}