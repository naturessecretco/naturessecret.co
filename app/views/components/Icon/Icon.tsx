import ICONS from "@configs/icons"
import Fab from '@mui/material/Fab';

export type IconProps = {
    id?: string,
    url?: string,
    key?: string | number,
}

const Icon = ({ id, key, url }: IconProps) => {

    return id ? Object.keys(ICONS).filter((key) => key === id).map((key, index) => {
        const IconComponent = ICONS[key];
        return (<Fab sx={{
            backgroundColor: 'var(--green-800)',
            mr: '0.5rem'
        }} href={url ? url : "#"} key={index} className="mr-2 bg-green-800 hover:bg-black transition-all"><IconComponent className='text-white hvr-pop' /> </Fab>)
    })[0] : <Fab className="mr-2 bg-green-800 hover:bg-black transition-all">
        <ICONS.FACEBOOK className='text-white hvr-pop' />
    </Fab>

}

export default Icon


