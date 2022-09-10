import useDrawer from "@hooks/useDrawer"
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';


import ClickAwayListener from '@mui/material/ClickAwayListener';

export type DrawerMenuProps = {

}
const DrawerMenu = () => {

    const { drawer: { isOpen }, toggleDrawer } = useDrawer()


    return (

        <CSSTransition in={isOpen}
            timeout={900}
            unmountOnExit>

            <ClickAwayListener onClickAway={() => toggleDrawer()}>
                <div className={`navbar-menu ${!isOpen ? "swing-out-left-bck" : ""} swing-in-left-fwd fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-black bg-opacity-80 border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold font-heading" href="#">
                                <img
                                    className="h-9"
                                    src="yofte-assets/logos/yofte-logo.svg"
                                    alt=""
                                    width="auto"
                                />
                            </a>
                            <button onClick={() => toggleDrawer()} className="navbar-close">
                                <CloseIcon className="text-white" />
                            </button>
                        </div>
                        <div className="flex mb-8 justify-between">
                            <a
                                className="inline-flex items-center font-semibold font-heading"
                                href="#"
                            >
                                <svg
                                    className="mr-3"
                                    width={32}
                                    height={31}
                                    viewBox="0 0 32 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>Sign&nbsp;In</span>
                            </a>
                            <div className="flex items-center">
                                <a className="mr-10" href="#">
                                    <svg
                                        width={23}
                                        height={20}
                                        viewBox="0 0 23 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
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
                            className="block mb-10 py-5 px-8 bg-gray-100 rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                            type="search"
                            placeholder="Search"
                        />
                        <ul className="text-3xl font-bold font-heading">
                            <li className="mb-8">
                                <a href="#">Category</a>
                            </li>
                            <li className="mb-8">
                                <a href="#">Collection</a>
                            </li>
                            <li className="mb-8">
                                <a href="#">Story</a>
                            </li>
                            <li>
                                <a href="#">Brand</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </ClickAwayListener>

        </CSSTransition>

    )
}

export default DrawerMenu