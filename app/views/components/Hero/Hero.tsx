export type HeroProps = {
    title?: string,
}


const Hero = ({ title }: HeroProps) => {

    return (
        <section className="py-20  overflow-x-hidden">
            <div className="container mx-auto px-4">


                <h2 className="text-white mb-16 md:mb-24 text-6xl md:text-5xl font-thin font-heading">
                    {title ? title : "Title"}
                </h2>


                <div className="flex mb-16">
                    <div className="flex-shrink-0 w-full flex flex-wrap">
                        <div className="w-full lg:w-1/2 md:px-3 mb-6">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-snapshot.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            LIFE Bottle 2.0
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$10.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $11.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">Great quality, eco material.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 md:px-3 mb-16">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-playing-tennis.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            Tennis racket Sanks 2
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$295.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $330.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">
                                            Great quality, light and pleasant.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:px-3 flex items-center justify-between">
                            <div className="relative mr-4 bg-gray-200 h-1 w-full md:w-10/12">
                                <div className="absolute top-0 bottom-0 left-0 bg-blue-300 w-1/4" />
                            </div>
                            <div className="ml-auto md:w-2/12 flex items-center justify-end">
                                <a
                                    className="mr-5 flex items-center justify-center w-12 h-12 bg-orange-300 hover:bg-orange-400 rounded-md"
                                    href="#"
                                >
                                    <svg
                                        width={8}
                                        height={12}
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="flex items-center justify-center w-12 h-12 bg-blue-300 hover:bg-blue-400 rounded-md"
                                    href="#"
                                >
                                    <svg
                                        width={8}
                                        height={12}
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-shrink-0 ml-16 opacity-40">
                        <div className="w-full lg:w-1/2 px-3">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-playing-tennis.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            LIFE Bottle 2.0
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$10.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $11.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">Great quality, eco material.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 px-3">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-playing-tennis.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            LIFE Bottle 2.0
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$10.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $11.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">Great quality, eco material.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>



                <div className="text-center">
                    <a
                        className="inline-block bg-white hover:bg-blue-300 text-black font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        All products
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Hero