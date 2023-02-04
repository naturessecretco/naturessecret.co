export { default as products } from "./products"
export { default as faqs } from "./faqs"
export { default as meta } from "./meta"
export { default as links } from "./links"
export { default as social_media } from "./social_media"


export const Database = class BlackprintDatabase {
    getLinks() { }
    getMedia() { }
    getSocialMedia() { }
    getFAQS() { }
    getMeta() { }
}

const DB = new Database

const component = {

    prop: DB.getLinks()
}