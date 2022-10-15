import Carousel from "@components/Carousel";
import type { HeroProps } from "@typings/Hero";
import { Fade } from 'react-awesome-reveal';
import { SocialIcon } from "react-social-icons";

import DistortionCarousel from "../DistortionCarousel";

const Hero = ({ features, socials, covers, backgroundCover, cta }: HeroProps) => {


    const Covers = () => {
        return (
            covers ? <div className="w-full lg:w-2/3 px-4">
                <div className="flex flex-wrap h-full mr-14 w-full">


                    <div className="w-full cursor-pointer">
                        <img
                            className="h-1/2 md:h-full w-full object-fit rounded"
                            src={covers[0]?.url}
                            alt={covers[0]?.alt}
                        />
                    </div>
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
            <div className="relative py-12 overflow-hidden font-sans">
                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 border-2 border-black">

                            <div className="px-4 md:px-8 py-10 bg-opacity-80  rounded">
                                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-gray-900 uppercase">
                                    {features?.heading}
                                </h4>

                                <ul className="mb-5">

                                    <Fade triggerOnce duration={600} cascade>
                                        {features.links ? features.links.map((link, index) => {
                                            return (
                                                <li key={index} className="py-5 px-8 bg-black duration-200  ease-in rounded mt-8 bg-opacity-40 cursor-pointer hover:bg-opacity-90">
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
                                            fill="#FFFFFF"
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
                                <SocialIcon url={social.url} key={index} bgColor="#2d6019"
                                    className="hover:scale-90 transition-all hover:bg-opacity-50 ml-2" />
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

export default Hero