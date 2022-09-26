import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export type CarouselProps = {
    children: any,
}

const Carousel = ({ children }: CarouselProps) => {

    return (
        <ReactResponsiveCarousel autoPlay showIndicators={false} interval={2000} showThumbs={false} infiniteLoop={true}>
            {children}
        </ReactResponsiveCarousel>
    )
}

export default Carousel