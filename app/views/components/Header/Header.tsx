import { Avatar } from "@mui/material"
import Image from "next/image"
import Headroom from "react-headroom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export type Link = {
    name: string,
    url: string
}

export type HeaderProps = {
    favicon: {
        src: string,
        url: string
    },
    navLinks?: Link[]
}

const Banner = ({ message = "" }) => {

    return (
        <div className="py-1 text-center text-sm border-b border-gray-100 bg-black text-white">
            <p className="font-medium text-darkBlueGray-300 leading-10">
                <span>Wildcrafred Seasmoss.</span>
                <span className="text-darkBlueGray-900">Get 20% off card!</span>
            </p>
        </div>
    )
}

const Header = ({ favicon, navLinks }: HeaderProps) => {


    const ContainerSx = {
        backdropFilter: "blur(8px)",
        borderBottom: '1px solid black'
    }

    return (
        <Headroom>
            <section style={ContainerSx} className="relative">
                <Banner />
                <div className="px-6 lg:px-12">
                    <nav className="flex justify-between">
                        <div className="flex w-full items-center py-6">

                            <a href="#">
                                <img
                                    className="h-12"
                                    src="/assets/images/logo.png"
                                    alt=""
                                />
                            </a>

                            <ul className="hidden xl:flex px-4 ml-20 2xl:ml-40 mr-auto">
                                {
                                    navLinks ?
                                        navLinks.map((link, index) => {
                                            return (
                                                <li key={index}
                                                    className="mr-16">
                                                    <a className="font-medium hover:text-darkBlueGray-400 uppercase"
                                                        href={link.url}>
                                                        {link.name}
                                                    </a>
                                                </li>

                                            )
                                        }
                                        ) : ''
                                }
                            </ul>

                            <div className="relative hidden xl:block">
                                <img
                                    className="absolute top-1/2 transform -translate-y-2/4 pl-6 mt-px"
                                    src="uinel-assets/elements/navigations/search-gray-icon.svg"
                                    alt=""
                                />
                                <input
                                    className="rounded-4xl py-3 pl-12 pr-5 bg-transparent text-gray-300 font-heading font-medium text-base  border-2 border-blueGray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none"
                                    style={{ width: 145 }}
                                />
                            </div>
                            <div className="hidden xl:block flex-shrink-0 w-px h-12 bg-gray-100 ml-12 mr-12" />
                            <div className="hidden xl:flex items-center">

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

                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </Headroom>

    )

}
export default Header