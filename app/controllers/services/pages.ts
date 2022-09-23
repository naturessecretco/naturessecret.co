import pages from "@db/pages"


const PageService = {

    data: {
        layout: pages.layout,
        pages: pages
    },

    methods: {

        loadDataPage: (pageKey?: string) => {
            return PageService.data.pages.pages[pageKey ? pageKey : "home"]
        },

        loadLayout: () => {
            return PageService.data.layout
        },


        getPage: async (pageKey: string) => {
            const isProduction = process.env.NODE_ENV === "production"
            return await fetch(`${isProduction ? "https://naturessecret.co/api/pages" : `http://localhost:${process.env.PORT || 3001}/api/pages`}`,
                {
                    method: 'POST',
                    body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
                }).then(res => res.json())
        },

        resolveQuery: async (query: any, dependencies: [] = []) => {
    
            var globalData = await Promise.all(dependencies ? dependencies : [])

            let resultStack = {}

            const QueryProcess =  query.map( (data) => {

                const { component, props } =  data

                Object.keys(props).map(async (prop) => {
                    if (typeof props[prop] === "function") {
                        props[prop] = await props[prop]()
                    } else {
                        if (props[prop].constructor.name === "AsyncFunction" &&
                            props[prop] !== undefined &&
                            props[prop] !== null) {
                            try {
                                await props[prop]().then(
                                    (res) => {
                                        props[prop] = res
                                    }
                                )
                            } catch (error) {
                                props[prop] = error
                            }
                        } else {
                            props[prop] = await props[prop]
                        }
                    }
                })
                return component(props)
            }
            )

            QueryProcess.map( (data) => {
                resultStack[data.name] = data
            })

            return resultStack
        }
    }
}


export default PageService

