import type { ImageProps } from "@typings/Image"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Image = ({ url, ...image }: ImageProps) => {

    return (
        <LazyLoadImage src={url ? url : "#"} placeholder={<>Loading</>} effect="blur" {...image} />
    )

}

export default Image