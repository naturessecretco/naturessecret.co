import resolveDataPage from "@controllers/utils/resolveDataPage"



export type DataPage = {
    init: Function,
    data: object,
    query: object
}




const homePage: DataPage = {

    init: () => {
        
        try {
            resolveDataPage(homePage.query)
        } catch (error) {
            console.log(error)
        }

        return { ...homePage.data, ...homePage.query }
    },

    query: {

    },

    data: {
        metaData: {
            pageTitle: 'Home'
        },

        hero: {
            cta: {
                name: 'Get Started',
                url: '/get-started'
            },
            heading: 'Natures Secrett',
            title: 'string',
            featured: {
                first: {
                    title: 'Wildcraffted Seamoss',
                    cover: {
                        src: '',
                        alt: 'Wildcraffted Seamoss'
                    }
                },

                second: {
                    title: 'Wildcraffted Seamoss',
                    cover: {
                        src: '',
                        alt: 'Wildcraffted Seamoss'
                    }
                },
                third: {
                    title: 'Wildcraffted Seamoss',
                    cover: {
                        src: '',
                        alt: 'Wildcraffted Seamoss'
                    }
                }
            }

        }
    }
}

export default homePage