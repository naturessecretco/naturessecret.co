import { atom, useRecoilState } from "recoil"

const drawerMenuState = atom({
    key: 'drawerMenuState',
    default: {
        isOpen: true
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