const Authenticator = () => {
    return (
        <section className="py-20  overflow-x-hidden">
            <div className="relative container px-4 mx-auto">
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 border border-gray-300 my-24 -ml-4 -mr-4" />
                    <div className="relative mx-auto py-28 px-4 border border-white text-center">
                        <a
                            className="inline-block mb-12 text-3xl font-bold font-heading text-white"
                            href="#"
                        >
                            <img
                                className="h-36"
                                src="/assets/images/facade.svg"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <h2 className="mb-14 text-4xl text-white font-bold font-heading">
                            Facade | WTFMVMT
                        </h2>
                        <div className="relative max-w-xl mx-auto">
                            <img
                                className="hidden md:block absolute top-0 -right-1/2 -mr-16"
                                src="yofte-assets/elements/white-sign-line.svg"
                                alt=""
                            />
                            <img
                                className="hidden md:block absolute bottom-0 -left-1/2 -ml-24"
                                src="yofte-assets/elements/orange-sign-line.svg"
                                alt=""
                            />
                            <img
                                className="hidden md:block absolute bottom-0 -right-1/2 -mb-12 -mr-40"
                                src="yofte-assets/elements/purple-sign-line.svg"
                                alt=""
                            />
                            <div className="flex flex-wrap -mx-2 mb-10 justify-between pb-16 border-b border-gray-500">
                                <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                                    <a
                                        className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                                        href="#"
                                    >
                                        <img src="yofte-assets/brands/google.svg" alt="" />
                                        <span className="ml-4 text-white uppercase font-bold font-heading">
                                            Google
                                        </span>
                                    </a>
                                </div>
                                <div className="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                                    <a
                                        className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                                        href="#"
                                    >
                                        <img src="yofte-assets/brands/apple.svg" alt="" />
                                        <span className="ml-4 text-white uppercase font-bold font-heading">
                                            Apple
                                        </span>
                                    </a>
                                </div>
                                <div className="w-full md:w-1/3 px-2">
                                    <a
                                        className="inline-flex items-center justify-center w-full h-16 border-2 border-gray-500 hover:border-gray-400 rounded-md"
                                        href="#"
                                    >
                                        <img src="yofte-assets/brands/facebook2.svg" alt="" />
                                        <span className="ml-4 text-white uppercase font-bold font-heading">
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-md mx-auto">
                                <h2 className="mb-10 text-xl text-white font-bold font-heading">
                                    Sign up with Email:
                                </h2>
                                <form action="">
                                    <input
                                        className="bg-transparent w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="text"
                                        placeholder="steven@example.dev"
                                    />
                                    <input
                                        className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <input
                                        className="w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="password"
                                        placeholder="Repeat password"
                                    />
                                    <label className="flex" htmlFor="">
                                        <input className="mr-4 mt-1" type="checkbox" />
                                        <span className="text-sm text-gray-100">
                                            By singning up, you agree to our Terms, Data Policy and
                                            Cookies.
                                        </span>
                                    </label>
                                    <button className="mt-12 md:mt-16 bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                                        JOIN yofte
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Authenticator