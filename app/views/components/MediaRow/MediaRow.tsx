
import type { MediaRowProps, MediaProps } from "@typings/MediaRow"


const $MediaRow = ({ media }: MediaRowProps) => {

    const PropsObject = {
        name: "mediaRow",
        media: media ? media : [{ url: '', cover: { src: 'NOT_FOUND', alt: 'NOT_FOUND' }, title: 'MEDIA_PROPERTY_NOT_FOUND', description: 'lorem ipsum dolor sandour' }]
    }

    return { ...PropsObject }
}

const MediaRow = ({ media, title }: MediaRowProps) => {

    const Media = () => {

        return (
            media ? <div className="flex flex-wrap -mx-4 pb-20 border-b font-sans">
                {media.map((item, index) => {
                    return (<div key={index} className="cursor-pointer relative w-1/2 rounded-full align-center md:w-1/2 lg:w-1/4 px-4 mb-16 mt-2 lg:mb-0 transition-all">
                        <div className="relative text-center bg-black bg-opacity-40 hover:bg-opacity-70 transition-all rounded p-6">
                            <a href={item.url}>
                                <span className="inline-flex mb-6 items-center justify-center w-full h-30 pb-10 rounded-full">
                                    <img
                                        className="md:block h-24 absolute top-0 lg:ml-8"
                                        src={item?.cover?.url}
                                        alt={item?.cover?.alt} />
                                </span>
                            </a>

                            <h3 className="mb-4 text-xl text-gray-200 font-bold font-heading">{item?.title}</h3>
                            <p className="mb-4 text-sm text-gray-200 font-bold font-heading truncate transform-gpu">{item?.description}</p>
                        </div>
                    </div>
                    )
                })
                }
            </div> : <></>
        )
    }


    return (
        media ? <section className="py-20">
            <div className="container mx-auto px-4">
                <h1 className="mt-6 text-4xl mb-2 font-bold leading-tight font-sans font-heading">{title ? title : "TITLE_NOT_FOUND"}</h1>

                <Media />
            </div>
        </section> : <></>

    )
}

export { $MediaRow }
export default MediaRow