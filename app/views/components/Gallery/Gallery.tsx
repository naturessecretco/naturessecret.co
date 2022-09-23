import Carousel from "@components/Carousel"
import CommentBox from "@components/CommentBox"

import type { GalleryProps } from "@typings/Gallery"


const $Gallery = ({ title, cta, items }: GalleryProps) => {
    const PropsObject = {
        name: "gallery",
        title: title ? title : 'TITLE_PROPERTY_NOT_FOUND',
        cta: cta ? cta : 'CTA_PROPERTY_NOT_FOUND',
        items: items ? items : 'ITEMS_PROPERTY_NOT_FOUND'
    }
    return {
        ...PropsObject
    }
}

const Gallery = ({ title, items, cta }: GalleryProps) => {


    const CallToAction = () => {
        return (

            cta ? <div className="text-center">
                <a
                    className="inline-block hover:scale-110 transition-all bg-black hover:bg-green-600 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                    href={cta.url}
                >
                    {cta.name}
                </a>
            </div> : <></>
        )
    }

    return (

        <section className="transition-all  relative py-20 md:pt-32 overflow-x-hidden">

            <div className="relative container px-4 mx-auto">
                <h2 className="mb-20 text-5xl text-black font-bold font-heading">
                    {title ? title : "Title"}
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 border border-gray-500 my-8 -ml-6 -mr-6" />
                    <div className="relative mx-auto mb-20 py-12 md:py-2 border border-black">
                        <Carousel>
                            {
                                items.map((item, index) => {
                                    return (
                                        <CommentBox {...item} key={index} />
                                    )
                                })}
                        </Carousel>
                        <div className="relative max-w-2xl px-4 mx-auto">
                        </div>
                    </div>
                </div>

                <CallToAction />
            </div>
        </section>

    )
}

export { $Gallery }
export default Gallery