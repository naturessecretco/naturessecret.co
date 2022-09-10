import { atom, useRecoilState } from "recoil"

const bannerState = atom({
    key: 'bannerState',
    default: {
        isOpen: true
    },
});

const useBanner = () => {

    const [banner, setBanner] = useRecoilState(bannerState)

    const toggleBanner = () => {
        setBanner({ isOpen: !banner.isOpen })
    }

    return { banner, toggleBanner }
}

export default useBanner