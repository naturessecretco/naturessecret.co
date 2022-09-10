import { SocialIcon } from 'react-social-icons';
import { Fade } from 'react-awesome-reveal';
export type Link = {
    name?: string,
    url?: string,

}


export type HeroProps = {
    title?: string,
    features?: {
        heading: string,
        links: Link[]
    }

}

const Hero = ({ title, features }: HeroProps) => {

    const FeatureLinks = () => {

        return (
            <div className="relative py-12 overflow-hidden">
                <div className="relative container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">

                            <div className="px-4 md:px-8 py-10 bg-black bg-opacity-80  rounded">
                                <h4 className="pl-8 mb-2 text-sm font-bold font-heading text-gray-200 uppercase">
                                    {features.heading}
                                </h4>

                                <ul className="mb-5">

                                    <Fade cascade>
                                        {features.links ? features.links.map((link, index) => {
                                            return (
                                                <li key={index} className="py-5 px-8">
                                                    <a
                                                        className="flex items-center text-lg text-gray-300 font-bold font-heading hover:text-green-700"
                                                        href="#"
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
                                        className="h-64 md:h-full w-full object-cover"
                                        src="yofte-assets/images/placeholder4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full md:w-5/12">
                                    <img
                                        className="md:mt-16 md:-ml-16 w-full h-64 md:h-full object-cover object-top"
                                        src="yofte-assets/images/placeholder3.png"
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

                    <a
                        className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.0064 0.554688H0.992752C0.444397 0.554962 -0.000137297 0.999771 3.181e-08 1.54826V17.5619C0.00027469 18.1103 0.445084 18.5548 0.993576 18.5547H17.0064C17.5551 18.5548 17.9999 18.1102 18 17.5615C18 17.5614 18 17.5612 18 17.5611V1.54744C17.9997 0.999084 17.5549 0.55455 17.0064 0.554688Z"
                                    fill="white"
                                />
                                <path
                                    d="M12.4277 18.555V11.5941H14.7744L15.126 8.86946H12.4277V7.13417C12.4277 6.34714 12.6462 5.81087 13.7748 5.81087H15.2051V3.38055C14.9562 3.34746 14.1025 3.27344 13.109 3.27344C11.0348 3.27344 9.61523 4.53906 9.61523 6.86432V8.86946H7.27734V11.5941H9.61523V18.555H12.4277Z"
                                    fill="#5475E5"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width={18}
                                        height={18}
                                        fill="white"
                                        transform="translate(0 0.554688)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M17.9825 5.84674C17.9403 4.89033 17.7857 4.2328 17.5641 3.66305C17.3356 3.05827 16.9839 2.51682 16.5232 2.0667C16.0731 1.60958 15.5281 1.25438 14.9303 1.02939C14.3573 0.807834 13.7032 0.653172 12.7468 0.611003C11.7832 0.565264 11.4773 0.554688 9.03349 0.554688C6.58966 0.554688 6.28377 0.565264 5.32379 0.607432C4.36738 0.6496 3.70985 0.804401 3.14024 1.02582C2.53532 1.25438 1.99387 1.60601 1.54375 2.0667C1.08663 2.51682 0.731567 3.06185 0.50644 3.65962C0.284885 4.2328 0.130222 4.88676 0.0880542 5.84317C0.0423147 6.80672 0.0317383 7.11261 0.0317383 9.55645C0.0317383 12.0003 0.0423147 12.3062 0.0844829 13.2662C0.126651 14.2226 0.281451 14.8801 0.503006 15.4498C0.731567 16.0546 1.08663 16.5961 1.54375 17.0462C1.99387 17.5033 2.5389 17.8585 3.13667 18.0835C3.70985 18.3051 4.36381 18.4597 5.32035 18.5019C6.2802 18.5442 6.58622 18.5546 9.03006 18.5546C11.4739 18.5546 11.7798 18.5442 12.7398 18.5019C13.6962 18.4597 14.3537 18.3051 14.9233 18.0835C16.133 17.6158 17.0894 16.6594 17.5571 15.4498C17.7785 14.8767 17.9333 14.2226 17.9755 13.2662C18.0177 12.3062 18.0282 12.0003 18.0282 9.55645C18.0282 7.11261 18.0247 6.80672 17.9825 5.84674ZM16.3616 13.1958C16.3228 14.0749 16.1752 14.5496 16.0521 14.8661C15.7496 15.6502 15.1273 16.2726 14.3431 16.5751C14.0267 16.6981 13.5485 16.8458 12.6729 16.8844C11.7235 16.9267 11.4387 16.9371 9.03707 16.9371C6.6354 16.9371 6.34709 16.9267 5.40112 16.8844C4.52204 16.8458 4.04734 16.6981 3.73087 16.5751C3.34064 16.4308 2.98544 16.2023 2.69713 15.9034C2.39824 15.6115 2.16968 15.2599 2.02546 14.8696C1.90239 14.5532 1.75473 14.0749 1.71613 13.1994C1.67383 12.25 1.66339 11.9651 1.66339 9.56345C1.66339 7.16178 1.67383 6.87347 1.71613 5.92764C1.75473 5.04856 1.90239 4.57386 2.02546 4.25739C2.16968 3.86703 2.39824 3.51196 2.7007 3.22351C2.99244 2.92463 3.34408 2.69607 3.73444 2.55198C4.05091 2.42891 4.52918 2.28125 5.40469 2.24252C6.35409 2.20035 6.63897 2.18977 9.0405 2.18977C11.4457 2.18977 11.7305 2.20035 12.6764 2.24252C13.5555 2.28125 14.0302 2.42891 14.3467 2.55198C14.7369 2.69607 15.0921 2.92463 15.3804 3.22351C15.6793 3.51539 15.9079 3.86703 16.0521 4.25739C16.1752 4.57386 16.3228 5.052 16.3616 5.92764C16.4037 6.87704 16.4143 7.16178 16.4143 9.56345C16.4143 11.9651 16.4037 12.2464 16.3616 13.1958Z"
                                    fill="white"
                                />
                                <path
                                    d="M9.03362 4.93262C6.48086 4.93262 4.40967 7.00367 4.40967 9.55657C4.40967 12.1095 6.48086 14.1805 9.03362 14.1805C11.5865 14.1805 13.6576 12.1095 13.6576 9.55657C13.6576 7.00367 11.5865 4.93262 9.03362 4.93262ZM9.03362 12.556C7.37752 12.556 6.03418 11.2128 6.03418 9.55657C6.03418 7.90033 7.37752 6.55713 9.03362 6.55713C10.6899 6.55713 12.0331 7.90033 12.0331 9.55657C12.0331 11.2128 10.6899 12.556 9.03362 12.556Z"
                                    fill="white"
                                />
                                <path
                                    d="M14.9198 4.74989C14.9198 5.34602 14.4365 5.82937 13.8402 5.82937C13.2441 5.82937 12.7607 5.34602 12.7607 4.74989C12.7607 4.15363 13.2441 3.67041 13.8402 3.67041C14.4365 3.67041 14.9198 4.15363 14.9198 4.74989Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect
                                        width={18}
                                        height={18}
                                        fill="white"
                                        transform="translate(0 0.554688)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a
                        className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full"
                        href="#"
                    >
                        <svg
                            className="w-4 h-4"
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 1.97356C17.3306 2.26719 16.6174 2.46181 15.8737 2.55631C16.6388 2.09956 17.2226 1.38181 17.4971 0.516687C16.7839 0.941937 15.9964 1.24231 15.1571 1.40994C14.4799 0.688813 13.5146 0.242188 12.4616 0.242188C10.4186 0.242188 8.77387 1.90044 8.77387 3.93331C8.77387 4.22581 8.79862 4.50706 8.85938 4.77481C5.7915 4.62519 3.07687 3.15481 1.25325 0.914938C0.934875 1.46731 0.748125 2.09956 0.748125 2.78019C0.748125 4.05819 1.40625 5.19106 2.38725 5.84694C1.79437 5.83569 1.21275 5.66356 0.72 5.39244C0.72 5.40369 0.72 5.41831 0.72 5.43294C0.72 7.22619 1.99912 8.71569 3.6765 9.05881C3.37612 9.14094 3.04875 9.18031 2.709 9.18031C2.47275 9.18031 2.23425 9.16681 2.01038 9.11731C2.4885 10.5787 3.84525 11.6531 5.4585 11.6879C4.203 12.6701 2.60888 13.2618 0.883125 13.2618C0.5805 13.2618 0.29025 13.2483 0 13.2112C1.63462 14.2653 3.57188 14.8672 5.661 14.8672C12.4515 14.8672 16.164 9.24219 16.164 4.36644C16.164 4.20331 16.1584 4.04581 16.1505 3.88944C16.8829 3.36969 17.4982 2.72056 18 1.97356Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                <div className="max-w-3xl mx-auto py-24 text-center">
                    <h2 className="mb-8 text-5xl xl:text-6xl font-bold font-heading">
                        Home to Natures Best Kept Secrest
                    </h2>
                    <a
                        className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200"
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
            <FeatureLinks />
            <Header />
        </section>
    )
}

export default Hero