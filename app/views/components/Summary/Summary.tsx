const Summary = () => {
    return (
        <section>
            <div className="pb-12 pt-24 2xl:pt-40  rounded-b-10xl">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <h2 className="text-9xl md:text-10xl xl:text-11xl font-medium font-heading mb-12 leading-tight">
                            Have a question?
                        </h2>
                        <p className="mb-20 text-lg text-darkBlueGray-400">
                            Sed porttitor turpis sit amet malesuada porta lobortis.
                        </p>
                        <div className="flex items-center flex-wrap">
                            <div className="w-full lg:w-1/3 mb-8 lg:mb-0 pb-4 lg:pb-0 md:px-8 xl:px-16 border-b lg:border-b-0 lg:border-r border-gray-200 border-opacity-50">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon1.svg"
                                        alt=""
                                    />
                                    <a className="text-xl lg:text-3xl font-medium" href="#">
                                        + 44 1447881709
                                    </a>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 mb-8 lg:mb-0 pb-4 lg:pb-0 md:px-8 xl:px-16 border-b lg:border-b-0 lg:border-r border-gray-200 border-opacity-50">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon3.svg"
                                        alt=""
                                    />
                                    <a className="text-xl lg:text-3xl font-medium" href="#">
                                        help@uinel
                                    </a>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 pb-8 lg:pb-0 md:px-8 xl:px-16">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon2.svg"
                                        alt=""
                                    />
                                    <a className="text-xl lg:text-3xl font-medium" href="#">
                                        uinelchat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 pt-20 pb-24">
                <div className="flex flex-wrap items-center justify-center">
                    <a
                        className="inline-block py-5 px-10 mb-6 md:mb-0 md:mr-12 w-full md:w-auto text-xl leading-6 text-white font-medium tracking-tighter text-center font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="button"
                    >
                        Book now
                    </a>
                    <a
                        className="inline-flex items-center pb-2 font-bold tracking-tight text-xl leading-6 text-green-600 hover:text-green-700 border-b border-green-600 hover:border-green-700"
                        href="#"
                    >
                        <span className="mr-3">More information</span>
                        <svg
                            width={16}
                            height={13}
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 1L15 7H1"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11 12L15 7"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    )
}
export default Summary