const Hero = () => {

    return (
        <section className="relative bg-black bg-opacity-50">
            <div className="pb-10 xl:pb-20">
                <div className="flex flex-wrap items-stretch -mx-1">
                    <div className="w-full lg:w-3/5 px-1 mb-2 lg:mb-0">
                        <div className="flex items-end relative h-full px-8 md:px-16 py-16 xl:pb-36 xl:pt-80 rounded-5xl overflow-hidden">
                            <img
                                className="absolute top-0 left-0 h-full w-full object-cover"
                                src="uinel-assets/images/ecommerce-headers/bg-placeholder.png"
                                alt=""
                            />
                            <div className="relative">
                                <span className="block mb-9 font-medium tracking-widest uppercase text-xs text-gray-200">
                                    Get 20% off card
                                </span>
                                <h1 className="mb-16 font-heading font-medium text-white text-9xl md:text-10xl xl:text-13xl leading-tight">
                                    Wildcrafted Seamoss
                                </h1>
                                <a
                                    className="inline-block py-4 px-10 w-full md:w-auto md:mr-6 mb-2 md:mb-0 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                    href="#"
                                >
                                    Shop now
                                </a>
                                <a
                                    className="inline-block py-4 px-10 w-full md:w-auto leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl"
                                    href="#"
                                >
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5 px-1">
                        <div className="relative flex items-end px-8 md:px-16 py-16 xl:pb-16 mb-2 xl:h-1/2 rounded-5xl overflow-hidden">
                            <img
                                className="absolute top-0 left-0 h-full w-full object-cover"
                                src="uinel-assets/images/ecommerce-headers/placeholder-1.png"
                                alt=""
                            />
                            <div className="relative w-full">
                                <span className="block mb-2 font-medium tracking-widest uppercase text-xs text-gray-200">
                                    Bestseller
                                </span>
                                <h2 className="mb-8 mt-28 font-heading font-medium text-white text-6xl md:text-8xl leading-tight">
                                    The ultimate multi tool option
                                </h2>
                                <a
                                    className="inline-block py-4 px-10 w-full md:w-auto leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl"
                                    href="#"
                                >
                                    Shop
                                </a>
                            </div>
                        </div>
                        <div className="relative flex items-end px-8 md:px-16 py-16 xl:pb-16 xl:h-1/2 rounded-5xl overflow-hidden">
                            <img
                                className="absolute top-0 left-0 h-full w-full object-cover transform scale-150"
                                src="uinel-assets/images/ecommerce-headers/placeholder-phone.png"
                                alt=""
                            />
                            <div className="relative w-full">
                                <span className="block mb-2 font-medium tracking-widest uppercase text-xs text-white">
                                    New
                                </span>
                                <h2 className="mb-8 font-heading font-medium text-white text-6xl md:text-8xl leading-tight">
                                    New Oppo
                                </h2>
                                <a
                                    className="inline-block py-4 px-10 w-full md:w-auto leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl"
                                    href="#"
                                >
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Hero