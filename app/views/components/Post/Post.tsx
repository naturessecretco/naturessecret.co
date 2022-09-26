export type PostProps = {
    title?: string,
    cover?: any,
    author?: string,
    content?: any
}

const Post = ({ title, cover, content }: PostProps) => {

    const CoverImage = (cover) => {
        return (
            <div className="relative h-96 -mx-6 mb-20">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-80 w-full" />
                <img
                    className="relative w-full h-96 px-6 object-cover"
                    src="/assets/images/mission.png"
                    alt=""
                />
            </div>

        )
    }

    return (
        <section className="relative pt-20 md:pt-40 pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4">

                <CoverImage cover={cover} />

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-6xl md:text-7xl font-bold font-heading text-black">
                        {title ? title : "Title"}
                    </h2>
                    <div className="inline-flex pt-14 mb-14 items-center">
                        <img
                            className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                            src="/assets/images/logo.png"
                            alt=""
                        />
                        <div className="text-left">
                            <h4 className="mb-1 text-2xl font-bold font-heading text-black">
                                Editor
                            </h4>
                            <p className="text-gray-700">26 Sept, 5:00 PM</p>
                        </div>
                    </div>


                    <div className="text-left">
                        <h3 className="mb-12 text-3xl text-black">
                            {content}
                        </h3>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Post