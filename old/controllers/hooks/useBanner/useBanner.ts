import { atom, useRecoilState } from "recoil"
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const bannerState = atom({
    key: 'bannerState',
    default: {
        isOpen: true
    },
    effects_UNSTABLE: [persistAtom]
});

const useBanner = () => {

    const [banner, setBanner] = useRecoilState(bannerState)

    const toggleBanner = () => {
        setBanner({ isOpen: !banner.isOpen })
    }

    return { banner, toggleBanner }
}

export default useBanner