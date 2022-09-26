export type PostProps = {
    title?: string,
    cover?: string,
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
                    src={cover ? cover : "/assets/images/logo.png"}
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
                            src="yofte-assets/images/placeholder-portrait.png"
                            alt=""
                        />
                        <div className="text-left">
                            <h4 className="mb-1 text-2xl font-bold font-heading text-black">
                                Sarah Smith
                            </h4>
                            <p className="text-gray-700">14 June, 5:00 am</p>
                        </div>
                    </div>


                    <div className="text-left">
                        <h3 className="mb-12 text-3xl text-black">
                            This morning, platea dictumst nec nunc. In hac habitasse, general,
                            dignissim accumsan just. Suspendisse vitae ligula convallis, porta
                            tortor et, finibus neque.
                        </h3>
                        <p className="text-xl text-gray-900 mt-5">
                            Some potential benefits of consuming our Top Quality nutritious Wildcrafted Seamoss,
                            Honey, & other foods include:1. A more nutritious diet – Our products are packed with
                            vitamins, minerals, and antioxidants that can help boost your overall health and well-being.
                            Increased energy levels – The high levels of nutrients in our products can give you the energy you need to get through your day.
                            3. Better digestive health –
                            Our products are loaded with probiotics and other gut-friendly nutrients that can help keep your digestive system functioning optimally.
                            4. Reduced inflammation – The anti-inflammatory properties of our products can help reduce inflammation throughout your body, leading to better overall health.5.
                        </p>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default Post