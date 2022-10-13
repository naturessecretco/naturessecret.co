import FacadeService from "@services/facade"

const links = (store: any[]) => {

    const { links } = FacadeService().types

    const databaseObject = {
        id: 'PRODUCTS_DATABASE_ID',
        version: Date.now(),
        getLinks:  () => {
            return store.filter((data) => {
                return (
                    links.predicate(data)
                )
            }).map((data) => {
                return (
                    links.shape(data)
                )
            })

        }

    }

    return { ...databaseObject }
}

export default links

