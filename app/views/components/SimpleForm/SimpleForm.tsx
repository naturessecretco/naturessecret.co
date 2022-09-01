const SimpleForm = () => {
    return (
        <section className="font-medium bg-blueGray-100 pt-12 pb-24 lg:pb-16 rounded-b-10xl">
            <div className="relative container px-4 mx-auto">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="md:flex md:items-center mb-12 lg:mb-0">
                        <div className="md:mr-6 xl:mr-24">
                            <img src="uinel-assets/elements/newsletter/newsletter.png" alt="" />
                        </div>
                        <div className="md:pr-10">
                            <h3 className="font-heading text-9xl leading-tight mb-4">
                                Newsletter
                            </h3>
                            <p className="text-lg font-normal text-darkBlueGray-400">
                                A porttitor turpis sit amet malesuada blandit.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-center lg:justify-end">
                        <img
                            className="mb-3 md:mb-0 md:mr-9"
                            src="uinel-assets/elements/newsletter/user.png"
                            alt=""
                        />
                        <input
                            className="bg-blueGray-50 md:mr-6 mb-3 md:mb-0 text-lg rounded-2xl h-16 text-darkBlueGray-400 md:max-w-xs lg:w-44 xl:w-72 2xl:w-80 w-full px-8 border border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-darkBlueGray-400"
                            type="text"
                            placeholder="Drop your email"
                        />
                        <a
                            className="block py-5 px-10 w-full md:w-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 text-center hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Get started
                        </a>
                    </div>
                </div>
                <img
                    className="absolute left-1/2 -bottom-52 lg:-bottom-32 transform -translate-x-1/2"
                    src="uinel-assets/elements/newsletter/dot-line-gray.svg"
                    alt=""
                />
            </div>
        </section>

    )
}

export default SimpleForm;