
const ContentGrid = () => {

    return (
        <section className="py-24 2xl:py-44">
            <div className="container px-4 mx-auto">
                <div className="mb-14 xl:mb-24 text-center">
                    <span className="inline-block py-3 px-7 mb-7 text-lg font-medium font-heading leading-5 text-indigo-500 bg-blueGray-100 border border-indigo-500 rounded-6xl">
                        New products
                    </span>
                    <h2 className="mb-8 xl:mb-12 text-9xl md:text-10xl xl:text-12xl font-heading font-medium">
                        Don’t look back
                    </h2>
                    <p className="text-xl text-darkBlueGray-400">
                        Sed porttitor turpis sit amet malesuada porta vivamus lobortis.
                    </p>
                </div>
                <div className="flex items-stretch flex-wrap -mx-3">
                    <div className="w-full xl:w-1/2 px-3">
                        <div className="sm:flex xl:flex-col -mx-3">
                            <div className="w-full sm:w-1/2 xl:w-full px-3 mb-6">
                                <div className="relative h-full">
                                    <img
                                        className="absolute w-full h-full object-cover rounded-7xl"
                                        src="uinel-assets/images/ecommerce-newest-products/smartphone.jpg"
                                        alt=""
                                    />
                                    <div className="relative z-10 p-10 xl:px-24 xl:pb-14 xl:pt-24">
                                        <div className="inline-block py-1 px-3 mb-2 text-xs text-blue-500 font-heading font-semibold bg-white border border-blue-500 rounded-3xl">
                                            -10%
                                        </div>
                                        <a
                                            className="block mb-5 text-6xl font-heading font-medium hover:underline"
                                            href="#"
                                        >
                                            Oppo Reno 5
                                        </a>
                                        <p className="mb-6 xl:mb-14 flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                                            <span className="mr-2 text-xs">$</span>
                                            <span>544.90</span>
                                        </p>
                                        <div className="sm:max-w-max">
                                            <a
                                                className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                                href="#"
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 xl:w-full px-3 mb-6 xl:mb-0">
                                <div className="relative h-full">
                                    <img
                                        className="absolute w-full h-full object-cover rounded-7xl"
                                        src="uinel-assets/images/ecommerce-newest-products/woman.jpg"
                                        alt=""
                                    />
                                    <div className="relative z-10 p-10 xl:px-24 xl:pb-14 xl:pt-24">
                                        <a
                                            className="block mb-5 text-6xl font-heading font-medium hover:underline"
                                            href="#"
                                        >
                                            Headphones Blacksaint 3
                                        </a>
                                        <p className="mb-6 xl:mb-14 flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                                            <span className="mr-2 text-xs">$</span>
                                            <span>544.90</span>
                                        </p>
                                        <div className="sm:max-w-max">
                                            <a
                                                className="block py-4 px-10 w-full text-xl leading-8 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                                href="#"
                                            >
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 px-3">
                        <div className="relative flex flex-col justify-end h-full">
                            <img
                                className="absolute w-full h-full object-cover rounded-7xl"
                                src="uinel-assets/images/ecommerce-newest-products/woman2.jpg"
                                alt=""
                            />
                            <div className="relative z-10 p-10 xl:px-24 xl:pb-44 xl:pt-24">
                                <div className="inline-block py-1 px-3 mb-2 text-xs text-blue-500 font-heading font-semibold bg-white border border-blue-500 rounded-3xl">
                                    -5%
                                </div>
                                <a
                                    className="block mb-5 text-6xl xl:text-10xl font-heading font-medium hover:underline"
                                    href="#"
                                >
                                    Samsung
                                </a>
                                <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                                    <span className="mr-2 text-xs">$</span>
                                    <span>544.90</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContentGrid;