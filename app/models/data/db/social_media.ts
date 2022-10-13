import FacadeService from "@services/facade"

const social_media = (store: any[]) => {

    const { social_media } = FacadeService().types

    const databaseObject = {
        id: 'SOCIAL_MEDIA_DATABASE',
        version: Date.now(),
        getSocialMedia:  () => {
            return store.filter((data) => {
                return (
                    social_media.predicate(data)
                )
            }).map((data) => {
                return (
                    social_media.shape(data)
                )
            }).sort()
        }
    }
    return { ...databaseObject }
}

export default social_media

