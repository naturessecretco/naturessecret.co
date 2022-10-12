const utils = () => {

    const utilsObject = {
        notion: {
            isDatabase: (key, data) => {
                return data.properties.Database.select.name === key
            },
            last_edited: (data) => {
                return data?.last_edited_time
            },
            multi_select: (data) => { },
            select: (data) => { },
            date: (data) => { },
            number: (data) => { },
            formula: (data) => { },
            rich_text: (data) => { },
            title: (data) => { },
            files: (data) => {
                return data?.files?.map(file => ({
                    url: file?.file?.url ?? "URL_NOT_FOUND",
                    name: file?.file?.name ?? "NAME_NOT_FOUND",
                })) ?? null
            },
            url: () => { },
        },


    }

    return { ...utilsObject }
}

export default utils