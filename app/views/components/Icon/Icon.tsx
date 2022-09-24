import ICONS from "@configs/icons"
import Fab from '@mui/material/Fab';

export type IconProps = {
    id?: string,
    key?: string | number,
}

const Icon = ({ id, key }: IconProps) => {

    return id ? Object.keys(ICONS).filter((key) => key === id).map((key, index) => {
        const IconComponent = ICONS[key];
        return <IconComponent key={index} />
    })[0] : <Fab className="mr-2 bg-blue-800 hover:bg-black transition-all"> 
        <ICONS.FACEBOOK className='text-white hvr-pop' />
    </Fab>

}

export default Icon


