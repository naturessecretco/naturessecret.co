import layout from "@configs/layout"

import { $Gallery } from "@components/Gallery"
import { $MediaRow } from "@components/MediaRow"
import { $Hero } from "@components/Hero"
import { $Summary } from "@components/Summary"

import type { PagesDBProps } from "@typings/page"


const pages: PagesDBProps = {
    id: 'natures-secret-pages',
    version: Date.now(),
    layout: layout,
    dependencies: [],
    pages: {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: [{
                component: $Gallery,
                props: {
                    items: "",
                    title: async () => "Is This Actually Working Lord Heavenly Father? Thou Art My God. Thou hast never forsaken me in all my weakness. Thou loves me.",
                    cta: '',
                }
            },
            {
                component: $MediaRow,
                props: {
                    items: [],
                    title: () => "Is This Actually Working Lord Heavenly Father? Thou Art My God. Thou hast never forsaken me in all my weakness. Thou loves me.",
                    description: '',
                }
            },

            {
                component: $Hero,
                props: {
                    title: '',
                }
            },
            {
                component: $Summary,
                props: {
                    title: '',
                }
            }
            ]
        }
    }
}


export default pages