import { atom, useRecoilState } from "recoil"

const drawerMenuState = atom({
    key: 'drawerMenuState',
    default: {
        isOpen: false
    },
});

const useDrawer = () => {

    const [drawer, setDrawer] = useRecoilState(drawerMenuState)

    const toggleDrawer = () => {
        setDrawer({ isOpen: !drawer.isOpen })
    }

    return { drawer, toggleDrawer }
}

export default useDrawer