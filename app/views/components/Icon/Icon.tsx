import icons from "@configs/icons"
import Fab from '@mui/material/Fab'

import type { IComponent } from "@typings/Component"
import type { IconProps } from "@typings/Icon"

const Icon: IComponent<IconProps> = ({ id, key, url }: IconProps) => {

    const IconComponent = icons()[id]

    return (
        <Fab className="mr-1 bg-green-500" href={url ? url : "/"}>
            <IconComponent key={key} />
        </Fab>
    )


}

export default Icon


