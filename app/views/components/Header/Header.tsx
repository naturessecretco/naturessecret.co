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
    navLinks?: Link[],
    banner: BannerProps
}


export type BannerProps = {
    message: string,
    show: boolean
}

const Banner = ({ message, show }: BannerProps) => {


    if (show) {
        return (
            <div className="py-1 text-center text-sm border-b border-gray-100 bg-black text-white">
                <p className="font-medium text-darkBlueGray-300 leading-10">
                    <span>{message}</span>
                </p>
            </div>
        )
    }

    else {
        return (
            <>
            </>
        )
    }
}

const Header = ({ favicon, navLinks, banner }: HeaderProps) => {

    const ContainerSx = {
        backdropFilter: "blur(5px)",
        borderBottom: '1px solid black'
    }

    return (

        <section style={ContainerSx} className="relative">
            <Headroom>
                <Banner {...banner} />
                <div className="px-6 lg:px-12">
                    <nav className="flex justify-between">
                        <div className="flex w-full items-center py-6">
                            <a href={`${favicon.url}`}>
                                <Avatar
                                    sx={{
                                        height: "80px",
                                        width: "80px",
                                    }}
                                    src={favicon.src}
                                />
                            </a>

                            <ul className="hidden xl:flex px-4 ml-20 2xl:ml-40 mr-auto">
                                {
                                    navLinks ?
                                        navLinks.map((link, index) => {
                                            return (
                                                <li key={index}
                                                    className="mr-16">
                                                    <a className="font-medium hover:text-darkBlueGray-400 text-white uppercase"
                                                        href={link.url}>
                                                        {link.name}
                                                    </a>
                                                </li>

                                            )
                                        }
                                        ) : ''
                                }
                            </ul>


                            <div className="hidden xl:block flex-shrink-0 w-px h-12 bg-gray-100 ml-12 mr-12" />
                            <div className="hidden xl:flex items-center">

                                <a
                                    className="relative inline-block text-white hover:text-gray-500"
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
                                <div className="flex-shrink-0 w-px h-12 bg-white  ml-9" />

                            </div>
                        </div>
                    </nav>
                </div>
            </Headroom>

        </section>

    )

}
export default Header