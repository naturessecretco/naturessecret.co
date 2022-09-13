import type { Image } from "@models/typings/Image"


export type Media = {
    key?: any,
    image?: Image,
    title?: string,
    description?: string
}


export type MediaRow = {

    media: Media[]

}


const MediaRow = ({ media }: MediaRow) => {

    const Media = ({ key, title, description, image }: Media) => {
        return (
            <div className="relative w-full md:w-1/2 lg:w-1/4 px-4 mb-16 lg:mb-0 hover:scale-110 transition-all hover:bg-black">
                <img
                    className="hidden md:block absolute top-0 left-1/2 ml-16 lg:ml-8"
                    src={image.src}
                    alt={image.alt}
                />
                <div className="relative text-center">
                    <span className="inline-flex mb-16 items-center justify-center w-20 h-20 bg-white rounded-full">

                    </span>
                    <h3 className="mb-4 text-xl font-bold font-heading">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>

        )
    }

    return (
        media ? <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 pb-20 border-b">
                    {media.map((item, index) => {
                        return (<Media {...item} key={index} />)
                    })
                    }
                </div>
            </div>
        </section> : <></>

    )
}

export default MediaRow