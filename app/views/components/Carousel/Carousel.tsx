import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export type CarouselProps = {
    children: any,
    infiniteLoop?: boolean
}

const Carousel = ({ children, infiniteLoop }: CarouselProps) => {

    return (
        <ReactResponsiveCarousel infiniteLoop={infiniteLoop}>
            {children}
        </ReactResponsiveCarousel>
    )
}

export default Carousel