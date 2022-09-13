import layout from "@models/configs/layout"

const missionPage = {

    init: () => {

        return { ...missionPage.data }
    },

    data: {

        layout: {
            ...layout,
            metaData: {
                'title': 'Mission',
            }
        },

        post: {

        }
    }
}

export default missionPage