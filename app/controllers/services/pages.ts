import pages from "@db/pages"

const PageService = {

    loadDataPage: (store?: any, pageKey?: string) => {
        return pages(store, pageKey)
    },

    getPage: async (pageKey: string) => {
        const isProduction = process.env.NODE_ENV === "production"
        return await fetch(`${isProduction ? "https://naturessecret.co/api/pages" : `http://localhost:${process.env.PORT || 3000}/api/pages`}`,
            {
                method: 'POST',
                body: JSON.stringify({ page: `${pageKey ? pageKey : "home"}` }),
            }).then(res => res.json())
    },

}




export default PageService

