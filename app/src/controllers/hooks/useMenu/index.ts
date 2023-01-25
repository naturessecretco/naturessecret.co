import { atom } from "nanostores"


export const menuState = atom({
    isOpen: false
})


export function useMenu() {

    const toggleMenu = () => {
        menuState.set({
            isOpen: !menuState.get().isOpen
        });

    };

    const closeMenu = () => {
        menuState.set({
            isOpen: false
        });

    };

    const openMenu = () => {
        menuState.set({
            isOpen: true
        });

    };

    const isOpen = menuState.get().isOpen;

    return { toggleMenu, closeMenu, openMenu, isOpen }

}