const utils = () => {

    const utilsObject = {
        notion: {
            isDatabase: (key, data) => {
                return data?.properties?.Database?.select?.name === key
            },
            getProperties: (data) => {
                return data?.properties ?? null
            },
            last_edited: (data) => {
                return data?.last_edited_time
            },
            multi_select: (data) => {
                return data?.multi_select?.map((item) => item?.name ? item?.name : null) ?? null
            },
            select: (data) => {
                return data?.select?.name ?? "SELECT_NOT_FOUND"
            },
            date: (data) => { },
            number: (data) => {
                return data?.number ?? 0
            },
            formula: (data) => { },
            rich_text: (data) => {
                return data?.rich_text?.find(t => t !== undefined)?.rich_text ?? 'RICH_TEXT_NOT_FOUND'
            },
            title: (data) => { },
            files: (data) => {
                return data?.files?.map(file => ({
                    url: file?.file?.url ?? "URL_NOT_FOUND",
                    name: file?.file?.name ?? "NAME_NOT_FOUND",
                })) ?? null
            },
            url: (data) => {
                return data?.url ?? "URL_NOT_FOUND"
            }

        },


    }

    return { ...utilsObject }
}

export default utils