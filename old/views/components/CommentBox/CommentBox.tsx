export type CommentBoxProps = {
    key?: any,
    title?: string,
    source?: string,
}


const CommentBox = ({ key, title, source }: CommentBoxProps) => {

    return (
        <section className="relative py-20 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <h2 className="mb-20 text-5xl font-bold font-sans font-heading">Product Reviews</h2>
                <div className="relative flex mb-20 flex-wrap white">
                    <div className="hidden md:block absolute top-1/2 left-0 w-64 h-2/3 -ml-6 transform -translate-y-1/2 blue-200" />
                    <div className="relative w-full md:w-1/2 lg:w-1/3 h-64 md:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src="yofte-assets/images/bottles-big.png"
                            alt=""
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 p-6 self-center">
                        <div className="max-w-lg mx-auto">
                            <div className="mb-10 pb-10 border-b">
                                <h2 className="mb-2 text-3xl font-bold font-heading">
                                    BRILE water filter carafe
                                </h2>
                                <span className="text-lg font-bold font-heading text-blue-300">
                                    $29.99
                                </span>
                            </div>
                            <div className="mb-10">
                                <button>
                                    <img
                                        className="h-6"
                                        src="yofte-assets/elements/star-gold.svg"
                                        alt=""
                                    />
                                </button>
                                <button>
                                    <img
                                        className="h-6"
                                        src="yofte-assets/elements/star-gold.svg"
                                        alt=""
                                    />
                                </button>
                                <button>
                                    <img
                                        className="h-6"
                                        src="yofte-assets/elements/star-gold.svg"
                                        alt=""
                                    />
                                </button>
                                <button>
                                    <img
                                        className="h-6"
                                        src="yofte-assets/elements/star-gold.svg"
                                        alt=""
                                    />
                                </button>
                                <button>
                                    <img
                                        className="h-6"
                                        src="yofte-assets/elements/star-gray.svg"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <p className="mb-12 md:mb-20 text-lg text-gray-500">
                                “Great bottle, I had interdum at ante porta, eleifend feugiat nunc.
                                In semper euismod mi a accumsan. Thank you, thank you so much! 👏💥”
                            </p>
                            <div className="flex flex-wrap items-center">
                                <p className="font-bold font-heading text-gray-800">
                                    Alice Kenowski, NYC
                                </p>
                                <div className="ml-auto flex items-center justify-end">
                                    <a
                                        className="mr-4 flex items-center justify-center w-12 h-12 orange-300 hover:orange-400 rounded-md"
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
                                        className="flex items-center justify-center w-12 h-12 blue-300 hover:blue-400 rounded-md"
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
                <div className="text-center">
                    <a
                        className="inline-block blue-800 hover:blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        Show More
                    </a>
                </div>
            </div>
        </section>

    )
}

export default CommentBox