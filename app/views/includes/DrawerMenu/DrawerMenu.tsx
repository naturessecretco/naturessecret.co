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

    const { drawer: { isOpen }, toggleDrawer, closeDrawer } = useDrawer()


    const NavLinks = () => {

        return (
            navLinks ?
                <ul className="text-2xl font-thin font-heading">
                    <Fade cascade>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={index} style={{ fontFamily: 'var(--font-secondary)' }} className="mb-8">
                                        <a className="text-white hover:text-green-300 hover:bg-white rounded hover:bg-opacity-50 transition-all p-3" href={link.url}>{link.name}</a>
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
            timeout={300}
            unmountOnExit>
            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <ClickAwayListener onClickAway={() => closeDrawer()}>
                    <nav className={`bg-yellow-300 bg-opacity-50 backdrop-blur-xl relative flex flex-col py-6 px-6 w-full h-full border-r "swing-in-left-bck" overflow-y-auto ${isOpen ? "swing-in-left-fwd" : ""}`}>
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold font-heading" href="/">
                                <img
                                    className="h-9"
                                    src="/assets/images/logo.png"
                                    alt=""
                                    width="auto"
                                />
                            </a>
                            <button onClick={() => closeDrawer()} className="navbar-close">
                                <CloseIcon sx={{ color: 'white' }} />
                            </button>
                        </div>
                        <div className="flex mb-8 justify-between">


                        </div>
                        <input
                            className="block mb-10 py-5 px-8 bg-green-900 bg-opacity-30 text-white placeholder-white rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                            type="search"
                            placeholder="Search here"
                        />
                        <NavLinks />
                    </nav>
                </ClickAwayListener>

            </div>


        </CSSTransition >

    )
}

export default DrawerMenu