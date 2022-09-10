const Gallery = () => {

    return (
        <section className="relative py-20 md:pt-32 overflow-x-hidden">
            <img
                className="absolute h-24 md:h-auto top-0 left-0 right-0"
                src="yofte-assets/elements/line-top.svg"
                alt=""
            />
            <div className="relative container px-4 mx-auto">
                <h2 className="mb-20 text-5xl text-white font-bold font-heading">
                    What Customers Say
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 border border-gray-500 my-8 -ml-6 -mr-6" />
                    <div className="relative mx-auto mb-20 py-12 md:py-28 bg-blue-800 border border-white">
                        <img
                            className="w-32 h-32 mb-10 mx-auto rounded-full"
                            src="yofte-assets/images/placeholder-portrait.png"
                            alt=""
                        />
                        <div className="relative max-w-2xl px-4 mx-auto">
                            <img
                                className="hidden md:block absolute top-0 left-0"
                                src="yofte-assets/elements/quote.svg"
                                alt=""
                            />
                            <img
                                className="hidden md:block absolute top-0 right-0"
                                src="yofte-assets/elements/quote.svg"
                                alt=""
                            />
                            <div className="max-w-md mx-auto px-4">
                                <h3 className="mb-16 text-2xl font-bold font-heading text-white">
                                    Tonight I had interdum at ante porta, eleifend feugiat nunc. In
                                    semper euismod mi a accumsan. Thaaank you! 👏💥
                                </h3>
                                <div className="flex flex-wrap items-center">
                                    <p className="mb-6 md:mb-0 text-gray-300">Alice Kenowski, NYC</p>
                                    <div className="ml-auto flex items-center justify-end">
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
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        Show More
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Gallery