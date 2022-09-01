import { Avatar } from "@mui/material"
import Image from "next/image"
import Headroom from "react-headroom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export type HeaderProps = {
    favicon: {
        src: string,
        url: string
    }
}

const Banner = () => {

    return (
        <div className="py-1 text-center text-sm border-b border-gray-100 bg-black text-white">
            <p className="font-medium text-darkBlueGray-300 leading-10">
                <span>Hello, you are new here.</span>
                <span className="text-darkBlueGray-900">Get 20% off card!</span>
            </p>
        </div>
    )
}

const Header = ({ favicon }: HeaderProps) => {

    return (

        <Headroom>
            <section style={{
                backdropFilter: "blur(10px)",
            }}className="relative">
                <Banner />

                <div className="px-6 lg:px-12">
                    <nav className="flex justify-between">
                        <div className="flex w-full items-center py-6">
                            <a href="#">
                                <img
                                    className="h-12"
                                    src="uinel-assets/logos/ecommerce/uistore-gray-black.svg"
                                    alt=""
                                />
                            </a>
                            <ul className="hidden xl:flex px-4 ml-20 2xl:ml-40 mr-auto">
                                <li className="mr-16">
                                    <a className="font-medium hover:text-darkBlueGray-400" href="#">
                                        Stories
                                    </a>
                                </li>
                                <li className="relative mr-16">
                                    <a
                                        className="flex items-center font-medium hover:text-darkBlueGray-400"
                                        href="#"
                                    >
                                        <span className="mr-4">Products</span>
                                        <svg
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
                                    <div className="product-menu hidden absolute top-0 left-0 mt-24 -ml-64 pl-24 pr-16 pt-16 pb-24 bg-white rounded-lg z-50">
                                        <div className="absolute top-0 left-0 ml-72 w-7 h-7 bg-white transform rotate-45 -translate-y-1/2" />
                                        <div className="flex flex-wrap min-w-max -mx-4 lg:-mx-10">
                                            <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                                <div>
                                                    <h3 className="mb-4 text-xl font-heading font-medium">
                                                        Smartphone
                                                    </h3>
                                                    <ul className="w-full">
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                View all
                                                            </a>
                                                        </li>
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                Premium&nbsp;Phones
                                                            </a>
                                                        </li>
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                Basic
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                Sale
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-40 mt-5 mb-7 border-b border-gray-100" />
                                                <div className="w-full">
                                                    <h3 className="mb-4 text-xl font-heading font-medium">
                                                        Tablet
                                                    </h3>
                                                    <ul className="w-full">
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                View all
                                                            </a>
                                                        </li>
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                Premium&nbsp;Tablets
                                                            </a>
                                                        </li>
                                                        <li className="mb-4">
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                For&nbsp;Designers
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="text-gray-400 hover:text-gray-500"
                                                                href="#"
                                                            >
                                                                Sale
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-40 mt-5 border-b border-gray-100" />
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                                <h3 className="mb-4 text-xl font-heading font-medium">
                                                    Brand
                                                </h3>
                                                <ul>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Apple iPhone
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Blackberry
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Google
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Huawei
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Nokia
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Oppo
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Samsung
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Sony
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Xiaomi
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="w-40 mt-5 mb-7 border-b border-gray-100" />
                                                <h3 className="mb-4 text-xl font-heading font-medium">
                                                    System
                                                </h3>
                                                <ul>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            iOS
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Android
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            View all
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="w-40 mt-5 border-b border-gray-100" />
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                                <h3 className="mb-4 text-xl font-heading font-medium">
                                                    Accesories
                                                </h3>
                                                <ul>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            View all
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Watches
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="w-40 mt-5 mb-7 border-b border-gray-100" />
                                                <h3 className="mb-4 text-xl font-heading font-medium">
                                                    Computers
                                                </h3>
                                                <ul>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Apple iMac
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Memory
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            PC
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Graphic Cards
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Monitors
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Hard Disk Drivers
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Cables
                                                        </a>
                                                    </li>
                                                    <li className="mb-4">
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Keyboards
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="text-gray-400 hover:text-gray-500" href="#">
                                                            Printers
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="w-40 mt-5 border-b border-gray-100" />
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:px-10">
                                                <div
                                                    className="relative flex items-end h-96 w-full rounded-lg bg-cover bg-no-repeat"
                                                    style={{
                                                        backgroundImage:
                                                            'url("uinel-assets/images/ecommerce-navigations/placehodler-right-banner.png")'
                                                    }}
                                                >
                                                    <div className="mx-2 mb-5 px-2 py-4 bg-white rounded-lg">
                                                        <h4 className="text-xl font-heading font-medium leading-tight">
                                                            Connected home
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="w-40 my-8 border-b border-gray-100" />
                                                <a
                                                    className="block py-5 px-2 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                                    href="#"
                                                >
                                                    New brands
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="font-medium hover:text-darkBlueGray-400" href="#">
                                        Outlet
                                    </a>
                                </li>
                            </ul>
                            <div className="relative hidden xl:block">
                                <img
                                    className="absolute top-1/2 transform -translate-y-2/4 pl-6 mt-px"
                                    src="uinel-assets/elements/navigations/search-gray-icon.svg"
                                    alt=""
                                />
                                <input
                                    className="rounded-4xl py-3 pl-12 pr-5 text-gray-300 font-heading font-medium text-base bg-blue-50 border-2 border-blueGray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none"
                                    style={{ width: 145 }}
                                />
                            </div>
                            <div className="hidden xl:block flex-shrink-0 w-px h-12 bg-gray-100 ml-12 mr-12" />
                            <div className="hidden xl:flex items-center">
                                <a
                                    className="inline-block mr-10 text-gray-400 hover:text-gray-500"
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
                                    className="relative inline-block text-gray-400 hover:text-gray-500"
                                    href="#"
                                >
                                    <div className="absolute bottom-0 right-0 flex items-center justify-center -mb-4 -mr-4 w-6 h-6 text-sm text-white bg-blue-500 rounded-full">
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
                                <div className="flex-shrink-0 w-px h-12 bg-gray-100 ml-9 mr-10" />
                                <a
                                    className="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500"
                                    href="#"
                                >
                                    <span className="font-medium">Sona</span>
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
                        <button className="navbar-burger self-center xl:hidden">
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

            </section>


        </Headroom>

    )

}
export default Header