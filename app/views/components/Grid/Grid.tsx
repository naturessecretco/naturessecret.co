import type { ImageProps } from "@typings/Image"

export type GridItem = {
    id?: string,
    title?: string,
    subTitle?: string,
    cover: ImageProps,
    description?: string
}

export type GridProps = {
    items: GridItem[]
}

const Grid = ({ items }: GridProps) => {


    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="flex flex-wrap -mx-4">
                        {
                            items ? items.map((gridItem, index) => {
                                return (
                                    <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                                        <div className="text-white hover:scale-110 transition-all hover:bg-opacity-100 text-center p-8 md:p-16 bg-black bg-opacity-75">
                                            <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-1/2 bg-gray-600 rounded-full">
                                                <img src={gridItem.cover.src} />
                                            </span>
                                            <h3 className="mb-4 text-xl font-bold font-heading">
                                                {gridItem.title}
                                            </h3>
                                            <p className="mb-6">{gridItem.subTitle}</p>
                                            <p className="text-lg text-gray-500">
                                                {gridItem.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }) : <></>
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Grid