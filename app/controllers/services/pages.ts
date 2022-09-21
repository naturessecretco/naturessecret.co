import pages from "@db/pages"


const PageService = {

    data: {
        layout: { ...pages.layout },
        pages: pages
    },

    methods: {

        loadPage: (pageKey: string) => {
            return PageService.data.pages[pageKey]
        },

        getLayout: () => {
            return PageService.data.layout
        },


        getPage: async (pageKey: string) => {
            const isProduction = process.env.NODE_ENV === "production"
            return await fetch(`${isProduction ? "https://naturessecret.com/api/pages" : `http://localhost:${process.env.PORT || 3001}/api/pages`}`,
                {
                    method: 'POST',
                    body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
                }).then(res => res.json())
        },

        resolveQuery: async (query) => {

            return Object.fromEntries(
                await Object.entries(query).map(([key, value]: [string, Function]) => {
                    return [key, value()]
                })
            )
        }
    }
}


export default PageService