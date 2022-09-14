import type { Image } from "@models/typings/Image"


export type Media = {
    key?: any,
    cover?: Image,
    title?: string,
    description?: string
}


export type MediaRow = {

    media: Media[]

}


const MediaRow = ({ media }: MediaRow) => {

    const Media = ({ key, title, description, cover }: Media) => {
        return (
            <div className="relative w-full align-center md:w-1/2 lg:w-1/4 px-4 mb-16 lg:mb-0 hover:scale-110 transition-all hover:bg-black">
                <div className="relative text-center bg-black rounded bg-opacity-80">
                    <span className="inline-flex mb-16 items-center justify-center w-30 h-30 pb-10 rounded-full">
                        <img
                            className="md:block h-20 absolute top-0 lg:ml-8"
                            src={cover.src}
                            alt={cover.alt} />
                    </span>
                    <h3 className="mb-4 text-xl text-gray-200 font-bold font-heading">{title}</h3>
                    <p className="text-gray-300">{description}</p>
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