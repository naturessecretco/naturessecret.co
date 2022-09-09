export type FooterProps = {
    copyright: string
}
const Footer = ({ copyright }) => {


    const Copyright = () => {

        return (

            <div className="mt-10 text-center">
                <p className="text-white">{copyright ? copyright : "Copyright"}</p>
            </div>
        )
    }


    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center pb-20 border-b border-gray-300">
                    <a
                        className="inline-block mb-20 text-3xl font-bold font-heading"
                        href="#"
                    >
                        <img
                            className="h-9"
                            src="yofte-assets/logos/yofte-logo.svg"
                            alt=""
                            width="auto"
                        />
                    </a>
                    <ul className="flex flex-wrap -mb-4 -mx-3 items-center justify-center">
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Category
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Collection
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Story
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Brand
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Partners
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Videos
                            </a>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="inline-block w-32 py-2 px-6 rounded-full hover:text-white bg-white hover:bg-gray-900 font-semibold font-heading transition duration-300"
                                href="#"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="flex mt-20 -mx-4 flex-wrap text-left">
                        <div className="w-full lg:w-auto px-4 mb-10 lg:mb-0">
                            <h3 className="mb-3 text-xl text-orange-300 font-bold font-heading">
                                Contact Us
                            </h3>
                            <p className="text-2xl md:text-3xl font-bold font-heading">
                                +41 0087 44 431
                            </p>
                        </div>
                        <div className="w-full lg:w-auto px-4 mb-10 lg:mb-0">
                            <h3 className="mb-3 text-xl text-orange-300 font-bold font-heading">
                                Email
                            </h3>
                            <p className="text-2xl md:text-3xl font-bold font-heading">
                                help@example.com
                            </p>
                        </div>
                        <div className="w-auto md:ml-auto px-4">
                            <div className="flex items-center">
                                <h3 className="mr-10 text-xl text-orange-300 font-bold font-heading">
                                    Follow Us:
                                </h3>
                                <div className="flex">
                                    <a
                                        className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                                        href="#"
                                    >
                                        <img
                                            src="yofte-assets/buttons/facebook-white-circle.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                                        href="#"
                                    >
                                        <img src="yofte-assets/buttons/instagram-circle.svg" alt="" />
                                    </a>
                                    <a
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                                        href="#"
                                    >
                                        <img src="yofte-assets/buttons/twitter-circle.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Copyright />

            </div>
        </section>

    )
}

export default Footer