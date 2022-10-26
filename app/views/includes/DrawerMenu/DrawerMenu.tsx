import CloseIcon from '@mui/icons-material/Close';

import FadeAnimation from "@components/FadeAnimation";
import useDrawer from "@hooks/useDrawer";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CSSTransition } from 'react-transition-group';

import type { IComponent } from "@models/typings/Component";
import type { MenuProps } from "@typings/Menu";
import ButtonsSx from '@views/styles/Buttons';

const DrawerMenu = ({ navLinks }: MenuProps) => {

    const { drawer: { isOpen }, closeDrawer } = useDrawer()


    const NavLinks = () => {

        const buttonStyles = ButtonsSx().tw()

        return (
            navLinks ?
                <ul className="text-2xl font-thin font-heading group">
                    {
                        navLinks.map((link, index) => {
                            return (
                                <li key={index} className="mb-14 font-sans font-bold delay">
                                    <a className={buttonStyles} href={link.url}><img className="inline-block h-4 no-wrap" src="/assets/images/leaf.svg" />{link.name}</a>
                                </li>

                            )
                        })
                    }

                </ul> : <></>
        )
    }

    return (
        <CSSTransition in={isOpen}
            timeout={550}
            unmountOnExit>
            <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <ClickAwayListener onClickAway={() => closeDrawer()}>
                    <nav className={`bg-yellow-300 bg-opacity-20 backdrop-blur-md relative flex flex-col py-6 px-6 w-full h-full border-r overflow-y-auto ${isOpen ? "swing-in-left-fwd" : "swing-out-left-bck"}`}>
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold font-heading" href="/">
                                <img
                                    className="h-9"
                                    loading='lazy'
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

                        <NavLinks />
                    </nav>
                </ClickAwayListener>

            </div>


        </CSSTransition >
    )
}

export default DrawerMenu