import layout from "@configs/layout"
import benefits from "@db/benefits"

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
        },

        grid: {
            items: [...benefits]
        },
        textData: {
            cta: {
                name: 'Get Started',
                url: '/products'

            }
        }
    }
}

export default benefitsPage