import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export type CarouselProps = {
    children: any,
}

const Carousel = ({ children }: CarouselProps) => {

    return (
        <ReactResponsiveCarousel  animationHandler="fade"  autoPlay showIndicators={false} interval={3000} showArrows={false} showThumbs={false} infiniteLoop={true}>
            {children}
        </ReactResponsiveCarousel>
    )
}

export default Carousel