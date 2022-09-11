import useDrawer from "@hooks/useDrawer"
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';


import ClickAwayListener from '@mui/material/ClickAwayListener';

export type Link = {
    name: string,
    url?: string
}

export type DrawerMenuProps = {

    navLinks?: Link[]
}


const DrawerMenu = ({ navLinks }: DrawerMenuProps) => {

    const { drawer: { isOpen }, toggleDrawer } = useDrawer()


    const NavLinks = () => {

        return (
            navLinks ?
                <ul className="text-2xl font-thin font-heading">
                    {
                        navLinks.map((link, index) => {
                            return (
                                <li key={index} style={{ fontFamily: 'var(--font-secondary)'}}className="mb-8">
                                    <a className="text-white hover:text-green-300 hover:bg-black rounded hover:bg-opacity-50 transition-all p-3" href={link.url}>{link.name}</a>
                                </li>

                            )
                        })
                    }


                </ul> : <></>
        )
    }

    return (

        <CSSTransition in={isOpen}
            timeout={900}
            unmountOnExit>

            <ClickAwayListener onClickAway={() => toggleDrawer()}>
                <div style={{ backdropFilter: 'blur(10px)' }} className={`navbar-menu ${!isOpen ? "swing-out-left-bck" : ""} swing-in-left-fwd fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50" />
                    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-green-800 bg-opacity-50 border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold font-heading" href="#">
                                <img
                                    className="h-20"
                                    src="/assets/images/logo.png"
                                    alt=""
                                    width="auto"
                                />
                            </a>
                            <button onClick={() => toggleDrawer()} className="navbar-close">
                                <CloseIcon className="text-white" />
                            </button>
                        </div>
                        <div className="flex mb-8 justify-between">
                         
                            <div className="flex items-center">
                            <a className="flex items-center" href="#">
                                    <svg
                                        className="mr-3"
                                        width={23}
                                        height={23}
                                        viewBox="0 0 23 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
                                        3
                                    </span>
                                </a>
                               
                            </div>
                        </div>
                        <input
                            className="block mb-10 py-5 px-8  bg-black text-white bg-opacity-50 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                            type="search"
                            placeholder="Search"
                        />




                        <NavLinks />



                    </nav>
                </div>
            </ClickAwayListener>

        </CSSTransition>

    )
}

export default DrawerMenu