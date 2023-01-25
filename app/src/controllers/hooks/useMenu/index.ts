import { atom, action } from "nanostores"


export const menuState = atom({
    isOpen: false
})

export function useMenu() {

    const toggleMenu = action(menuState, "toggleMenu", () => {
        menuState.set({
            isOpen: !menuState.get().isOpen
        });
        console.log(menuState.get())

    });

    const openMenu = action(menuState, "toggleMenu", () => {
        menuState.set({
            isOpen: !menuState.get().isOpen
        });
        console.log(menuState.get())

    });

    const closeMenu = action(menuState, "toggleMenu", () => {
        menuState.set({
            isOpen: !menuState.get().isOpen
        });
        console.log(menuState.get())

    });

    const isOpen = action(menuState, "isOpen", () => menuState.get().isOpen)

    return { toggleMenu, closeMenu, openMenu, menuState, isOpen }

}