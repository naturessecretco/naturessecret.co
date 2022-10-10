
import type { MediaRowProps, MediaProps } from "@typings/MediaRow"


const $MediaRow = ({ media }: MediaRowProps) => {

    const PropsObject = {
        name: "mediaRow",
        media: media ? media : [{ url: '', cover: { src: 'NOT_FOUND', alt: 'NOT_FOUND' }, title: 'MEDIA_PROPERTY_NOT_FOUND', description: 'lorem ipsum dolor sandour' }]
    }

    return { ...PropsObject }
}

const MediaRow = ({ media }: MediaRowProps) => {

    const Media = () => {

        return (
            media ? <div className="flex flex-wrap -mx-4 pb-20 border-b font-sans">
                {media.map((item, index) => {
                    return (<div key={index} className="cursor-pointer relative w-1/2 rounded-full align-center md:w-1/2 lg:w-1/4 px-4 mb-16 lg:mb-0 transition-all">
                        <div className="relative text-center bg-black bg-opacity-60 hover:bg-opacity-90 transition-all rounded p-2">
                            <a href={item.url}>
                                <span className="inline-flex mb-16 items-center justify-center w-30 h-30 pb-10 rounded-full">
                                    <img
                                        className="md:block h-20 absolute top-0 lg:ml-8"
                                        src={item?.cover?.src}
                                        alt={item?.cover?.alt} />
                                </span>
                            </a>

                            <h3 className="mb-4 text-xl text-gray-200 font-bold font-heading">{item.title}</h3>
                            <p className="mb-4 text-xl text-gray-200 font-bold font-heading truncate transform-gpu">{item.description}</p>
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
                <Media />
            </div>
        </section> : <></>

    )
}

export { $MediaRow }
export default MediaRow