
import Avatar from "@mui/material/Avatar"
import type { HeaderProps } from "@typings/Header"
import Headroom from "react-headroom"
import useMenuDrawerState from "@hooks/useMenuDrawerState"

const Header = ({ favicon, user, navLinks, actionLinks, actionButtons }: HeaderProps) => {

    const { toggleDrawer } = useMenuDrawerState()

    const NavLinks = () => (

        <ul className="hidden xl:flex">

            {navLinks && navLinks.map((link, index) => (

                <li key={index}>
                    <a className="flex mr-10 items-center text-white hover:text-gray-100 text-sm" href={link.url}>
                        <span>{link.name}</span>
                    </a>
                </li>
            )
            )}

        </ul>
    )


    const Favicon = () => (
        <>
            {
                favicon && <a
                    className="flex-shrink-0 mr-12 flex-row inline text-2xl text-white font-semibold"
                    href={favicon.url}
                >
                    <img
                        className="h-10"
                        src={favicon.src}
                        alt=""
                        width="auto"
                    />
                </a>
            }
        </>
    )


    const ActionButtons = () => (


        actionButtons &&
        <ul className="ml-auto">

            <li className="inline-block">
                <a href="#">
                    <svg
                        className="text-gray-200 w-5 h-5"
                        width={14}
                        height={18}
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.333618 9.00008C0.333618 9.2211 0.421416 9.43306 0.577696 9.58934C0.733976 9.74562 0.945938 9.83342 1.16695 9.83342H7.49195L5.57528 11.7417C5.49718 11.8192 5.43518 11.9114 5.39287 12.0129C5.35057 12.1145 5.32879 12.2234 5.32879 12.3334C5.32879 12.4434 5.35057 12.5523 5.39287 12.6539C5.43518 12.7554 5.49718 12.8476 5.57528 12.9251C5.65275 13.0032 5.74492 13.0652 5.84647 13.1075C5.94802 13.1498 6.05694 13.1716 6.16695 13.1716C6.27696 13.1716 6.38588 13.1498 6.48743 13.1075C6.58898 13.0652 6.68115 13.0032 6.75862 12.9251L10.0919 9.59175C10.1678 9.5125 10.2273 9.41904 10.2669 9.31675C10.3503 9.11386 10.3503 8.8863 10.2669 8.68342C10.2273 8.58112 10.1678 8.48767 10.0919 8.40841L6.75862 5.07508C6.68092 4.99738 6.58868 4.93575 6.48716 4.8937C6.38564 4.85165 6.27683 4.83001 6.16695 4.83001C6.05707 4.83001 5.94826 4.85165 5.84674 4.8937C5.74522 4.93575 5.65298 4.99738 5.57528 5.07508C5.49759 5.15278 5.43595 5.24502 5.3939 5.34654C5.35185 5.44806 5.33021 5.55687 5.33021 5.66675C5.33021 5.77663 5.35185 5.88544 5.3939 5.98696C5.43595 6.08847 5.49759 6.18072 5.57528 6.25842L7.49195 8.16675H1.16695C0.945938 8.16675 0.733976 8.25455 0.577696 8.41083C0.421416 8.56711 0.333618 8.77907 0.333618 9.00008ZM11.1669 0.666748H2.83362C2.17058 0.666748 1.53469 0.93014 1.06585 1.39898C0.59701 1.86782 0.333618 2.50371 0.333618 3.16675V5.66675C0.333618 5.88776 0.421416 6.09972 0.577696 6.256C0.733976 6.41228 0.945938 6.50008 1.16695 6.50008C1.38797 6.50008 1.59993 6.41228 1.75621 6.256C1.91249 6.09972 2.00028 5.88776 2.00028 5.66675V3.16675C2.00028 2.94573 2.08808 2.73377 2.24436 2.57749C2.40064 2.42121 2.6126 2.33341 2.83362 2.33341H11.1669C11.388 2.33341 11.5999 2.42121 11.7562 2.57749C11.9125 2.73377 12.0003 2.94573 12.0003 3.16675V14.8334C12.0003 15.0544 11.9125 15.2664 11.7562 15.4227C11.5999 15.579 11.388 15.6667 11.1669 15.6667H2.83362C2.6126 15.6667 2.40064 15.579 2.24436 15.4227C2.08808 15.2664 2.00028 15.0544 2.00028 14.8334V12.3334C2.00028 12.1124 1.91249 11.9004 1.75621 11.7442C1.59993 11.5879 1.38797 11.5001 1.16695 11.5001C0.945938 11.5001 0.733976 11.5879 0.577696 11.7442C0.421416 11.9004 0.333618 12.1124 0.333618 12.3334V14.8334C0.333618 15.4965 0.59701 16.1323 1.06585 16.6012C1.53469 17.07 2.17058 17.3334 2.83362 17.3334H11.1669C11.83 17.3334 12.4659 17.07 12.9347 16.6012C13.4036 16.1323 13.6669 15.4965 13.6669 14.8334V3.16675C13.6669 2.50371 13.4036 1.86782 12.9347 1.39898C12.4659 0.93014 11.83 0.666748 11.1669 0.666748Z"
                            fill="#C2C9D2"
                        />
                    </svg>
                </a>
            </li>
        </ul>


    )
    const ActionLinks = () => (



        <ul className="flex items-center">

            {
                actionLinks && actionLinks.map((link, index) => (
                    <li key={index}>
                        <a
                            className="flex mr-10 items-center text-sm text-white hover:scale-90 transitiona-all hover:text-purple-600"
                            href={link.url}
                        >
                            <span>{link.name}</span>
                        </a>
                    </li>

                ))
            }

        </ul>

    )

    return (

        <section>
            <Headroom>
                <nav style={{
                    borderBottom: '1px solid gray',
                    backdropFilter: 'blur(13px)'
                }} className="relative bg-black text-white bg-opacity-70">
                    <div className="p-6 flex items-center">
                        <Favicon />
                        <NavLinks />

                        <ul className="hidden xl:flex lg:justify-end lg:items-center lg:space-x-6 mr-6 ml-auto">
                            <li>
                                <a className="text-gray-600 hover:text-gray-500" href="#">
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-500" href="#">
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 16 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="hidden xl:block">
                            <button className="flex items-center">
                                <div className="mr-3">
                                    <p className="text-sm text-white">{user.name ? user.name : "Default"}</p>
                                    <p className="text-sm text-gray-400">{user.role ? user.role : "Default"}</p>
                                </div>
                                <div className="mr-2">
                                    <Avatar>
                                        {user.initals ? user.initals : "O"}
                                    </Avatar>
                                </div>
                                <span>
                                    <svg
                                        className="text-gray-400"
                                        width={10}
                                        height={6}
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="ml-auto flex xl:hidden">
                            <button onClick={() => toggleDrawer()} className="navbar-burger flex items-center rounded focus:outline-none">
                                <svg
                                    className="text-white bg-black hover:bg-purple-600 block h-8 w-8 p-2 rounded"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="hidden xl:block py-5 px-6 bg-black bg-opacity-70 border-b">
                        <div className="flex items-center">
                            <ActionLinks />
                            <ActionButtons />
                        </div>
                    </div>
                </nav>

            </Headroom>
        </section>

    )
}

export default Header