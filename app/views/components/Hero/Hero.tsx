import Carousel from "@components/Carousel";
import { CallToActionProps } from '@models/typings/CallToAction';
import type { ImageProps } from "@typings/Image";
import { Fade } from 'react-awesome-reveal';
import Icon from "@components/Icon"


export type Link = {
    name?: string,
    url?: string,

}
export type Social = {
    name?: string,
    icon?: string,
    url: string
}


export type HeroProps = {
    key?: string | number,
    name?: string,
    version?: string | number,
    title?: string,
    socials?: Social[],
    backgroundCover?: string,
    covers?: ImageProps[]
    cta?: CallToActionProps,
    features?: {
        heading: string,
        links: Link[]
    }

}


const $Hero = ({ features, socials, covers, backgroundCover, cta }: HeroProps) => {

    const PropsObject: HeroProps = {
        name: "hero",
        version: Date.now(),
        features: features ? features : {
            heading: "FEATURES_HEADING_PROPERTY_NOT_FOUND",
            links: [{ name: "Feature 1", url: "#" }, { name: "Feature 2", url: "#" }, { name: "Feature 3", url: "#" }]
        },
        socials: socials ? socials : [{ url: 'SOCIALS_PROPERTY_NOT_FOUND' }],
        covers: covers ? covers : [{ src: 'COVERS_PROPERTY_NOT_FOUND', alt: 'COVERS_PROPERTY_NOT_FOUND' }],
        backgroundCover: backgroundCover ? backgroundCover : 'BACKGROUND_COVER_PROPERTY_NOT_FOUND',
        cta: cta ? cta : { name: 'CTA_PROPERTY_NOT_FOUND', url: 'CTA_PROPERTY_NOT_FOUND' }

    }


    return PropsObject
}

const Hero = ({ features, socials, covers, backgroundCover, cta }: HeroProps) => {


    const Covers = () => {
        return (
            covers ? <div className="w-full lg:w-2/3 px-4">
                <div className="flex flex-wrap h-full mr-14 w-full">


                    <Carousel>
                        {covers.map((cover, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <img
                                        className="h-full md:h-full w-full object-fit bg-black bg-opacity-40 rounded"
                                        src={cover.src}
                                        alt={cover.alt}
                                    />
                                </div>
                            )
                        })}
                    </Carousel>

                </div>
            </div> : <></>
        )
    }


    const CallToAction = () => {
        return (
            cta ? <div className="max-w-3xl translate-y-0 mx-auto py-24 text-center bg-opacity-0 opacity-0">
                <a
                    className="mt-48 inline-block bg-opacity-80 bg-black hover:bg-green-600 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition-all"
                    href={cta.url}
                >
                    {cta.name}
                </a>
            </div> : <></>
        )
    }

    const FeatureLinks = () => {

        return (
            <div className="relative py-12 overflow-hidden">
                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">

                            <div className="px-4 md:px-8 py-10 bg-black bg-opacity-80  rounded">
                                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-gray-300 uppercase">
                                    {features?.heading}
                                </h4>

                                <ul style={{ fontFamily: 'var(--font-secondary)' }} className="mb-5">

                                    <Fade cascade>
                                        {features.links ? features.links.map((link, index) => {
                                            return (
                                                <li key={index} className="py-5 px-8">
                                                    <a
                                                        className="flex items-center text-lg text-gray-300 font-bold font-heading hover:text-green-700"
                                                        href={link.url}
                                                    >

                                                        <span>{link.name}</span>
                                                    </a>
                                                </li>
                                            )
                                        }) : <></>}

                                    </Fade>

                                </ul>




                                <a className="inline-block w-full" href="#">

                                    <svg
                                        className="mx-auto"
                                        width={13}
                                        height={8}
                                        viewBox="0 0 13 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 5.09179L11.5558 -6.31273e-08L13 1.4541L6.5 8L-6.35609e-08 1.4541L1.44419 -5.05121e-07L6.5 5.09179Z"
                                            fill="#9A97A7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>


                        <Covers />





                    </div>
                </div>
            </div>
        )
    }


    const Header = () => {

        const HeaderSx = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
        }

        const Socials = () => {
            return (
                socials ? <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">

                    {
                        socials.map((social, index) => {
                            return (
                                <Icon url={social.url} key={index} id={social.icon} />
                            )
                        })
                    }

                </div> : <></>
            )

        }

        return (
            <div style={HeaderSx} className="relative container mx-auto px-2">
                <img src={backgroundCover} alt="background cover" className="" />

                <Socials />
                <CallToAction />
            </div>

        )
    }


    return (
        <section>
            <Header />
            <FeatureLinks />
        </section>
    )
}

export { $Hero }
export default Hero