export type PostProps = {
    title?: string,
    cover?: string,
    content?: any
}

const Post = ({ title, cover, content }: PostProps) => {

    return (
        <section className="relative pt-20 md:pt-40 pb-20 overflow-x-hidden">
            <img
                className="absolute top-0 left-0 w-full max-h-32"
                src="yofte-assets/elements/line-content.svg"
                alt=""
            />
            <div className="container mx-auto px-4">
                <div className="relative h-96 -mx-6 mb-20">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-80 w-full bg-blue-300" />
                    <img
                        className="relative w-full h-96 px-6 object-cover"
                        src="yofte-assets/images/placeholder-banner.png"
                        alt=""
                    />
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-6xl md:text-7xl font-bold font-heading text-white">
                        How to improve online store?
                    </h2>
                    <div className="inline-flex pt-14 mb-14 items-center">
                        <img
                            className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                            src="yofte-assets/images/placeholder-portrait.png"
                            alt=""
                        />
                        <div className="text-left">
                            <h4 className="mb-1 text-2xl font-bold font-heading text-white">
                                Sarah Smith
                            </h4>
                            <p className="text-gray-500">14 June, 5:00 am</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <h3 className="mb-12 text-3xl text-white">
                            This morning, platea dictumst nec nunc. In hac habitasse, general,
                            dignissim accumsan just. Suspendisse vitae ligula convallis, porta
                            tortor et, finibus neque.
                        </h3>
                        <p className="mb-10 text-xl text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                            consequat nisl quis justo egestas, nec eleifend erat egestas.
                            Curabitur purus neque, tincidunt ac malesuada nec, ornare non odio.
                            Nulla nec lorem sed purus semper porta vel sit amet sem. Nunc placerat
                            non turpis eu molestie. Nam consectetur lacus ut lacus elementum
                            dapibus. Etiam vehicula ipsum ac dolor tristique placerat. In hac
                            habitasse platea dictumst.
                        </p>
                        <p className="text-xl text-gray-400">
                            Orci varius natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Aliquam venenatis est quis venenatis
                            dignissim. Maecenas a sem eros. Quisque hendrerit vitae libero non
                            porta. Maecenas quis sem et nulla pellentesque accumsan. Proin blandit
                            bibendum orci, a aliquam augue sagittis sed. Quisque pharetra ut quam
                            eget varius. Morbi nisi nunc, ultricies id ligula id, feugiat eleifend
                            est. Etiam metus sem, ornare vitae porta vel, porta a mauris. Fusce
                            dapibus egestas lorem eu tincidunt. Quisque lobortis placerat
                            placerat. Donec eget lectus blandit ex pellentesque iaculis. Proin
                            aliquam vulputate arcu et blandit. Duis sed lobortis mauris, vel
                            porttitor lectus. Pellentesque vel ultrices odio.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Post