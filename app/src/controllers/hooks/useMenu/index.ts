import { atom } from "nanostores"


export const menuState = atom()


export function useMenu() {

    const toggleMenu = false;

    const closeMenu = false;

    const openMenu = false;

    return { toggleMenu, closeMenu, openMenu }

}