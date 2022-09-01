const ContentRow = () => {

    return (
        <section className="py-24 2xl:pt-64 2xl:pb-48 font-medium overflow-hidden">
            <div className="relative container px-4 mx-auto">
                <span className="block mb-9 uppercase tracking-widest text-xs leading-4">
                    The Most popular
                </span>
                <h2 className="mb-20 xl:mb-44 font-heading text-9xl md:text-10xl xl:text-11xl leading-tight">
                    FAQ’s
                </h2>
                <div className="flex mb-20 xl:mb-40">
                    <div className="flex-shrink-0 px-4 lg:px-1 w-full lg:w-1/3">
                        <div className="relative py-9 px-16 h-full bg-white rounded-3xl">
                            <h3 className="font-heading text-3xl xl:text-6xl leading-tighter">
                                How should i develop my workflow over time?
                            </h3>
                            <a
                                className="absolute -bottom-6 right-10 block w-12 h-12 bg-blue-500 rounded-full"
                                href="#"
                            >
                                <img
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    src="uinel-assets/elements/faqs/arrow-down-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 px-4 lg:px-1 w-full lg:w-1/3">
                        <div className="relative py-9 px-16 h-full bg-white rounded-3xl">
                            <h3 className="font-heading text-3xl xl:text-6xl leading-tighter">
                                Can i pay by credit card?
                            </h3>
                            <a
                                className="absolute -bottom-6 right-10 block w-12 h-12 bg-blue-500 rounded-full"
                                href="#"
                            >
                                <img
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    src="uinel-assets/elements/faqs/arrow-down-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 px-4 lg:px-1 w-full lg:w-1/3">
                        <div className="relative py-9 px-16 h-full bg-white rounded-3xl">
                            <h3 className="font-heading text-3xl xl:text-6xl leading-tighter">
                                How often should the app be updated?
                            </h3>
                            <a
                                className="absolute -bottom-6 right-10 block w-12 h-12 bg-blue-500 rounded-full"
                                href="#"
                            >
                                <img
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    src="uinel-assets/elements/faqs/arrow-down-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 px-4 lg:px-1 w-full lg:w-1/3">
                        <div className="relative py-9 px-16 h-full bg-white rounded-3xl">
                            <h3 className="font-heading text-3xl xl:text-6xl leading-tighter">
                                What is a product key?
                            </h3>
                            <a
                                className="absolute -bottom-6 right-10 block w-12 h-12 bg-blue-500 rounded-full"
                                href="#"
                            >
                                <img
                                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    src="uinel-assets/elements/faqs/arrow-down-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-wrap justify-center">
                    <div className="flex items-center mx-auto w-full md:w-1/2 xl:w-full max-w-max">
                        <a className="mr-4 lg:mr-8 xl:mr-24" href="#">
                            <img src="uinel-assets/elements/faqs/arrow-left-black.svg" alt="" />
                        </a>
                        <div
                            className="flex mx-auto w-56 lg:w-96 h-px bg-gray-100"
                            style={{ height: 2 }}
                        >
                            <a className="w-1/3 bg-indigo-500" href="#" />
                            <a className="w-2/3 bg-white" href="#" />
                        </div>
                        <a className="ml-4 lg:ml-8 xl:ml-24" href="#">
                            <img src="uinel-assets/elements/faqs/arrow-right-black.svg" alt="" />
                        </a>
                    </div>
                    <a
                        className="xl:absolute xl:top-0 xl:right-0 xl:transform xl:-translate-y-1/2 inline-block mt-10 sm:mt-0 hover:text-darkBlueGray-400"
                        href="#"
                    >
                        <div className="relative py-5 px-16">
                            <span className="relative z-10 font-heading text-xl">
                                Scroll for more
                            </span>
                            <img
                                className="absolute top-0 left-0"
                                src="uinel-assets/elements/faqs/elipse1-blue.svg"
                                alt=""
                            />
                            <img
                                className="absolute top-0 left-0"
                                src="uinel-assets/elements/faqs/elipse2-blue.svg"
                                alt=""
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default ContentRow