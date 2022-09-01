export type PageData = {
    init: Function,
    data: object,
    query: object
}


const homePage: PageData = {

    init: () => {

        return { ...homePage.data, ...homePage.query }
    },
    query: {

    },
    data: {
        hero: {

        }
    }
}

export default homePage