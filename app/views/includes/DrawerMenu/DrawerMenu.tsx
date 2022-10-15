import CloseIcon from '@mui/icons-material/Close';

import FadeAnimation from "@components/FadeAnimation";
import useDrawer from "@hooks/useDrawer";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

import type { IComponent } from "@models/typings/Component";
import type { MenuProps } from "@typings/Menu";

const DrawerMenu = ({ navLinks }: MenuProps) => {

    const { drawer: { isOpen }, closeDrawer } = useDrawer()


    const NavLinks = () => {

        return (
            navLinks ?
                <ul className="text-2xl font-thin font-heading">
                    <FadeAnimation duration={500} triggerOnce cascade>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={index} className="mb-14 font-sans font-bold">
                                        <a className="text-gray-900 hover:text-green-400 hover:bg-black rounded-full -ml-4 hover:bg-opacity-70 transition-all p-3" href={link.url}><img className="inline-block h-4 ml-4  hvr-pop no-wrap" src="/assets/images/leaf.svg" />{link.name}</a>
                                    </li>

                                )
                            })
                        }
                    </FadeAnimation>



                </ul> : <></>
        )
    }

    return (
        <CSSTransition in={isOpen}
            timeout={250}
            unmountOnExit>
            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <ClickAwayListener onClickAway={() => closeDrawer()}>
                    <nav className={`bg-yellow-400 bg-opacity-50 backdrop-blur-lg relative flex flex-col py-6 px-6 w-full h-full border-r "swing-in-left-bck" overflow-y-auto ${isOpen ? "swing-in-left-fwd" : "swing-out-left-bck"}`}>
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold font-heading" href="/">
                                <img
                                    className="h-9"
                                    src="/assets/images/logo.png"
                                    alt=""
                                    width="auto"
                                />
                            </a>
                            <button onClick={() => closeDrawer()} className="navbar-close hover:scale-90 hover:bg-green-600 transition-all duration-500 rounded-full">
                                <CloseIcon sx={{ color: 'white' }} />
                            </button>
                        </div>
                        <div className="flex mb-8 justify-between">


                        </div>
                        <input
                            className="block mb-10 py-5 px-8 bg-green-900 font-sans bg-opacity-30 text-white placeholder-black rounded-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
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