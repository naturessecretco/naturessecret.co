import { QueryClient } from '@tanstack/react-query';
import pages from "@db/pages"
import { useQueryClient as QueryClientUse } from '@tanstack/react-query'

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
            return await fetch(`${isProduction ? "https://naturessecret.co/api/pages" : `http://localhost:${process.env.PORT || 3000}/api/pages`}`,
                {
                    method: 'POST',
                    body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
                }).then(res => res.json())
        },

        resolveQuery: async (query: any, dependencies: [] = []) => {

            var globalData = await Promise.all(dependencies ? dependencies : [])

            let resultStack = {}

            const ProcessQueries = query.map((data) => {

                const { component, props } = data

                Object.keys(props).map(async (prop) => {
                    if (typeof props[prop] === "function") {
                        props[prop] = await props[prop]()
                    } else {
                        if (props[prop].constructor.name === "AsyncFunction" &&
                            props[prop] !== undefined &&
                            props[prop] !== null) {
                            setTimeout(async () => {
                                try {
                                    await props[prop]().then(
                                        (res) => {
                                            props[prop] = res
                                        }
                                    )
                                } catch (error) {
                                    props[prop] = error
                                }
                            }, 300)
                        } else {
                            props[prop] = await props[prop]
                        }
                    }
                })
                return component(props)
            }
            )

            ProcessQueries.map((data) => {
                resultStack[data.name] = data
            })

            return ProcessQueries.every((q) => q.then !== 'function') ? resultStack : await Promise.race(ProcessQueries)
        }
    }
}


export default PageService

