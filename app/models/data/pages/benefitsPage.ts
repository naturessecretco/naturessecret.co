import layout from "@configs/layout"

const benefitsPage = {

    init: () => {
        return { ...benefitsPage.data }
    },
    data: {
        layout: {
            ...layout,
            metaData: {
                pageTitle: 'Benefits'
            }
        }
    }
}

export default benefitsPage