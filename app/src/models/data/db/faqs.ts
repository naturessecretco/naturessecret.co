import FacadeService from "@services/facade"

const faqs = (store: any[]) => {

    const { faqs } = FacadeService().types

    const databaseObject = {
        id: 'FAQS_DATABASE_ID',
        version: Date.now(),
        getFAQs: () => {
            return (store.filter((data) => {
                return (
                    faqs.predicate(data)
                )
            })).map((data) => {
                return (
                    faqs.shape(data)
                )
            }).sort()

        }

    }

    return { ...databaseObject }
}

export default faqs

