

const Header = () => {

    return (
        <section className="overflow-hidden bg-darkBlueGray-50">
            <div className="bg-blue-500">
                <div className="px-6 md:px-12">
                    <nav className="flex justify-between py-6">
                        <div className="relative flex w-full items-center">
                            <a
                                className="hidden md:inline-block mr-12 text-white hover:text-gray-100"
                                href="#"
                            >
                                <svg
                                    width={25}
                                    height={16}
                                    viewBox="0 0 25 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width={25} height={2} fill="currentColor" />
                                    <rect y={14} width={25} height={2} fill="currentColor" />
                                </svg>
                            </a>
                            <div className="hidden md:block flex-shrink-0 w-px h-12 bg-blue-400 opacity-40 mx-12" />
                            <div className="relative hidden xl:flex items-center px-6 py-4 border-2 border-blue-400 border-opacity-40 rounded-xl">
                                <span className="inline-block mr-6">
                                    <svg
                                        width={17}
                                        height={17}
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.0015 15.2219L5.43359 11.21"
                                            stroke="white"
                                            strokeWidth={2}
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9.93063 12.5306C13.1138 12.5306 15.6943 9.94935 15.6943 6.76528C15.6943 3.5812 13.1138 1 9.93063 1C6.74746 1 4.16699 3.5812 4.16699 6.76528C4.16699 9.94935 6.74746 12.5306 9.93063 12.5306Z"
                                            stroke="white"
                                            strokeWidth={2}
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <input
                                    className="rounded-4xl text-sm text-white placeholder-white font-heading font-medium bg-blue-500 outline-none"
                                    placeholder="SEARCH"
                                />
                            </div>
                            <a
                                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                                href="#"
                            >
                                <img
                                    className="h-12"
                                    src="uinel-assets/logos/ecommerce/uistore-white-white.svg"
                                    alt=""
                                />
                            </a>
                            <div className="hidden md:block flex-shrink-0 w-px h-12 bg-blue-400 opacity-40 ml-auto mr-12" />
                            <div className="hidden xl:flex items-center">
                                <a
                                    className="inline-block mr-10 text-white hover:text-gray-100"
                                    href="#"
                                >
                                    <svg
                                        width={23}
                                        height={21}
                                        viewBox="0 0 23 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.4998 20.2059L2.70115 10.925C1.92859 10.1441 1.41864 9.13717 1.24355 8.04689C1.06847 6.95661 1.23713 5.83827 1.72563 4.8503V4.8503C2.09464 4.10439 2.63366 3.45781 3.29828 2.96383C3.9629 2.46985 4.73408 2.14261 5.5483 2.00908C6.36252 1.87555 7.19647 1.93955 7.98144 2.1958C8.7664 2.45205 9.47991 2.89322 10.0632 3.48296L11.4998 4.93554L12.9364 3.48296C13.5197 2.89322 14.2332 2.45205 15.0182 2.1958C15.8031 1.93955 16.6371 1.87555 17.4513 2.00908C18.2655 2.14261 19.0367 2.46985 19.7013 2.96383C20.3659 3.45781 20.905 4.10439 21.274 4.8503V4.8503C21.7625 5.83827 21.9311 6.95661 21.756 8.04689C21.581 9.13717 21.071 10.1441 20.2984 10.925L11.4998 20.2059Z"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="relative inline-block text-white hover:text-gray-100"
                                    href="#"
                                >
                                    <div className="absolute bottom-0 right-0 flex items-center justify-center -mb-4 -mr-4 w-6 h-6 text-sm text-white bg-purple-400 rounded-full">
                                        3
                                    </div>
                                    <svg
                                        width={21}
                                        height={23}
                                        viewBox="0 0 21 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.1159 8.72414H2.50427C1.99709 8.72414 1.58594 9.12657 1.58594 9.62299V21.308C1.58594 21.8045 1.99709 22.2069 2.50427 22.2069H18.1159C18.6231 22.2069 19.0342 21.8045 19.0342 21.308V9.62299C19.0342 9.12657 18.6231 8.72414 18.1159 8.72414Z"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.34473 6.34483V4.9569C6.34473 3.85259 6.76252 2.79352 7.5062 2.01265C8.24988 1.23179 9.25852 0.793106 10.3102 0.793106C11.362 0.793106 12.3706 1.23179 13.1143 2.01265C13.858 2.79352 14.2758 3.85259 14.2758 4.9569V6.34483"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <div className="flex-shrink-0 w-px h-12 bg-blue-400 opacity-40 ml-10 mr-9" />
                                <a className="flex items-center text-white" href="#">
                                    <span className="font-medium text-white">Sona</span>
                                    <img
                                        className="ml-5"
                                        src="uinel-assets/elements/navigations/avatar-online.png"
                                        alt=""
                                    />
                                    <svg
                                        className="ml-4"
                                        width={8}
                                        height={5}
                                        viewBox="0 0 8 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <button className="navbar-burger py-6 self-center text-white md:hidden">
                            <svg
                                width={25}
                                height={16}
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={25} height={2} fill="currentColor" />
                                <rect y={14} width={25} height={2} fill="currentColor" />
                            </svg>
                        </button>
                    </nav>
                    <div className="navbar-menu hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
                        <nav className="relative flex flex-col py-20 px-12 md:pl-18 md:pr-16 h-full w-full bg-darkBlueGray-700 overflow-y-auto">
                            <button className="navbar-close absolute top-5 p-6 right-5">
                                <svg
                                    width={14}
                                    height={13}
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="13.495"
                                        y1="0.494975"
                                        x2="1.49498"
                                        y2="12.495"
                                        stroke="#326BFF"
                                        strokeWidth="1.4"
                                    />
                                    <line
                                        x1="12.505"
                                        y1="12.495"
                                        x2="0.505026"
                                        y2="0.494976"
                                        stroke="#326BFF"
                                        strokeWidth="1.4"
                                    />
                                </svg>
                            </button>
                            <span className="mb-6 text-xs text-darkBlueGray-300 font-medium uppercase tracking-wider">
                                Discover Uistore
                            </span>
                            <ul className="mb-20">
                                <li className="mb-2 md:mb-0">
                                    <a
                                        className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading"
                                        href="#"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li className="mb-2 md:mb-0">
                                    <a
                                        className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading"
                                        href="#"
                                    >
                                        New in
                                    </a>
                                </li>
                                <li className="mb-2 md:mb-0">
                                    <a
                                        className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading"
                                        href="#"
                                    >
                                        Sale
                                    </a>
                                </li>
                                <li className="mb-2 md:mb-0">
                                    <a
                                        className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading"
                                        href="#"
                                    >
                                        Stories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading"
                                        href="#"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <ul className="mb-12 flex-1">
                                <li className="mb-5">
                                    <a
                                        className="text-xl text-blue-500 hover:text-blue-400 font-heading"
                                        href="#"
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-5">
                                    <a
                                        className="text-xl text-blue-500 hover:text-blue-400 font-heading"
                                        href="#"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-xl text-blue-500 hover:text-blue-400 font-heading"
                                        href="#"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                            <a
                                className="block w-full py-4 px-10 text-lg text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                href="#"
                            >
                                Sign in
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div
                className="bg-cover bg-right md:bg-center"
                style={{
                    backgroundImage:
                        'url("uinel-assets/images/ecommerce-headers/background-photo.png")'
                }}
            >
                <div className="container px-4 mx-auto">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto pt-20 md:pt-36">
                        <span className="inline-block px-5 py-3 mb-10 font-medium tracking-wide text-lg text-blue-500 bg-white border border-blue-500 rounded-full">
                            New product
                        </span>
                        <h1 className="max-w-xl mb-8 font-heading font-medium text-8xl md:text-10xl xl:text-13xl leading-tight">
                            Headphones for you.
                        </h1>
                        <p className="mb-7 font-heading font-medium text-xl">
                            Up to 23% off everything.
                        </p>
                        <p className="mb-14 text-base text-darkBlueGray-400">
                            From $29.12/mo. for 24 mo. or $699 before trade‑in1.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start mb-14 md:mb-24">
                            <a
                                className="inline-block w-full md:w-auto py-4 px-10 mb-10 md:mb-0 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                href="#"
                            >
                                Shop now
                            </a>
                            <span className="hidden md:inline-block mx-8 text-darkBlueGray-200">
                                <svg
                                    width={2}
                                    height={46}
                                    viewBox="0 0 2 46"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width={2} height={4} rx={1} fill="currentColor" />
                                    <rect y={14} width={2} height={4} rx={1} fill="currentColor" />
                                    <rect y={28} width={2} height={4} rx={1} fill="currentColor" />
                                    <rect y={42} width={2} height={4} rx={1} fill="currentColor" />
                                </svg>
                            </span>
                            <a
                                className="inline-flex items-center justify-center w-16 h-14 mr-2 bg-white hover:bg-darkBlueGray-100 rounded-full"
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
                                        d="M7.21015 10.4594C7.59662 10.8128 7.59662 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.096617 6.28579 -0.096617 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880363 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                            <a
                                className="inline-flex items-center justify-center w-16 h-14 bg-white hover:bg-darkBlueGray-100 rounded-full"
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
                                        d="M0.289848 1.54064C-0.0966159 1.18719 -0.0966159 0.615929 0.289848 0.265087C0.676312 -0.0870581 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.096616 11.3824 -0.096616 10.8112 0.289848 10.4603L4.81927 5.99853L0.289848 1.54064Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 ml-auto">
                        <div className="flex items-center">
                            <div className="hidden md:block md:w-1/2 lg:w-1/3">
                                <div className="h-1 mb-28">
                                    <div className="h-1/2 mt-20 bg-gray-200 w-full">
                                        <div className="w-1/3 h-full bg-purple-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-auto md:w-auto md:ml-10 lg:ml-40">
                                <img
                                    src="uinel-assets/images/ecommerce-headers/placeholder-photo.png"
                                    alt=""
                                />
                                <div className="absolute bottom-5 sm:bottom-0 left-5 sm:left-0 sm:ml-12 sm:mb-12">
                                    <a
                                        className="block text-7xl text-white font-heading font-medium underline"
                                        href="#"
                                    >
                                        Shop tablet
                                    </a>
                                    <a
                                        className="inline-flex items-center text-xl font-medium text-white hover:text-darkBlueGray-100"
                                        href="#"
                                    >
                                        <span className="mr-2">Buy</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header