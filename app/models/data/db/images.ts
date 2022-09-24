import images from "@db/images"

const imagesDB = {
    id: 'productsDB',
    version: Date.now(),
    data: [{
        id: 'home-hero',
        version: Date.now(),
        collection: 'ui',
        src: '/assets/images/home-hero.png',
        alt: 'Home Hero for Natures Secret',
    }],

    apis: {
        productsAPI: `${process.env.NODE_ENV === "production" ? "https://naturessecret.co/api/media" : `http://localhost:${process.env.PORT || 3000}/api/media`}`
    },

    methods: {



        getImages: ({ property, value, limit, type }) => {
            let results = []
            const isLocal = type === "local"
            const isExternal = type === "external"

            isLocal ? (
                results = imagesDB.data.filter(image => image[property] === value).slice(0, limit ? limit : 1)
            ) : null

            return results
        },


    }
}

export default imagesDB

