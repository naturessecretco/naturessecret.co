import { SocialIcon } from 'react-social-icons';
import { Fade } from 'react-awesome-reveal';
import SimpleCarousel from 'simple-react-carousel';



export type Link = {
    name?: string,
    url?: string,

}
export type Social = {
    url: string
}


export type HeroProps = {
    title?: string,
    socials?: Social[],
    features?: {
        heading: string,
        links: Link[]
    }

}

const Hero = ({ title, features, socials }: HeroProps) => {

    const FeatureLinks = () => {

        return (
            <div className="relative py-12 overflow-hidden">
                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">

                            <div className="px-4 md:px-8 py-10 bg-black bg-opacity-80  rounded">
                                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-gray-300 uppercase">
                                    {features.heading}
                                </h4>

                                <ul style={{ fontFamily: 'var(--font-secondary)'}} className="mb-5">

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
                        <div className="w-full lg:w-2/3 px-4">
                            <div className="flex flex-wrap h-full">
                                <div className="w-full md:w-7/12">
                                    <img
                                        className="h-64 md:h-full w-full object-cover bg-black bg-opacity-40 rounded"
                                        src="/assets/images/wildcrafted-seamoss-1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-5/12 bg-black bg-opacity-40 rounded">
                                    <img
                                        className="md:mt-16 md:-ml-16 w-full h-64 md:h-full object-cover object-top"
                                        src="/assets/images/buckwheat-honey-1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-5/12 bg-black bg-opacity-40 rounded">
                                    <img
                                        className="md:mt-16 md:-ml-16 w-full h-64 md:h-full object-cover object-top"
                                        src="/assets/images/garlic.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-5/12 bg-black bg-opacity-40 rounded">
                                    <img
                                        className="md:mt-16 md:-ml-16 w-full h-64 md:h-full object-cover object-top"
                                        src="/assets/images/herbs.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const Header = () => {

        return (
            <div className="relative container mx-auto px-4">

                <div className="text-center mt-16 xl:mt-24 xl:mr-8 xl:absolute top-0 right-0 xl:transform xl:-translate-y-1/2">

                    {
                        socials.map((social, index) => {
                            return (
                                <SocialIcon bgColor="#000000" className="hover:scale-110 transition-all mr-3" fgColor="yellow" key={index}
                                    url={social.url} />
                            )
                        })
                    }

                </div>
                <div className="max-w-3xl mx-auto py-24 text-center">
                    <h2 className="text-8xl mb-14 xl:text-6xl font-bold font-heading text-gray-900">
                    <img className="w-full" src="/assets/images/cover.png"/>

                    </h2>
                    <a
                        className="inline-block bg-black hover:bg-green-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
                        href="#"
                    >
                        Shop Now
                    </a>
                </div>


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