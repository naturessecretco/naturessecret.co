import useDrawer from "@hooks/useDrawer"
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';

import { Fade } from "react-awesome-reveal"
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
                    <Fade cascade>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={index} style={{ fontFamily: 'var(--font-secondary)' }} className="mb-8">
                                        <a className="text-white hover:text-green-300 hover:bg-black rounded hover:bg-opacity-50 transition-all p-3" href={link.url}>{link.name}</a>
                                    </li>

                                )
                            })
                        }
                    </Fade>



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

                        <NavLinks />
                    </nav>

                </div>
            </ClickAwayListener>

        </CSSTransition >

    )
}

export default DrawerMenu