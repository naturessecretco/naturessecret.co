import FacadeService from "@services/facade"

const links = (store: any[]) => {

    const { links } = FacadeService().types

    const databaseObject = {
        id: 'LINKS_DATABASE_ID',
        version: Date.now(),
        getHeaderLinks: () => {
            return databaseObject.getLinks().filter((link: any) => link.types.includes('🧕🏿Header'))
        },
        getFeatured: () => {
            return databaseObject.getLinks().filter((link: any) => link.types.includes('⭐Featured'))
        },
        getPageLinks: () => {
            return databaseObject.getLinks().filter((link: any) => link.types.includes('📄Page'))
        },

        getLinks: () => {
            return store.filter((data) => {
                return (
                    links.predicate(data)
                )
            }).map((data) => {
                return (
                    links.shape(data)
                )
            }).sort()

        }

    }

    return { ...databaseObject }
}

export default links

