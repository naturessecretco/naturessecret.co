import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

const Carousel = () => {

    return (
        <ReactResponsiveCarousel>
            <div>
                <img className="object-cover w-full h-full"
                    src="/assets/images/seamoss-mockup-1.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </ReactResponsiveCarousel>
    )
}

export default Carousel