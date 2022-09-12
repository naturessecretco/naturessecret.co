const getDataPageIds = ({ pageData }) => {

    const pageIds = pageData.map((data) => {
        return {
            params: {
                id: data.id
            }
        }
    })

    return {
        paths: pageIds,
    }
}

export default getDataPageIds
