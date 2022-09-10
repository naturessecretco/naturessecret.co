import type { CallToAction } from "@typings/CallToAction"



export type HeroProps = {
    cta?: CallToAction
    title?: string,
}

const Featured = ({ title, cta }: HeroProps) => {

    const Features = () => {
        return (

            <div style={{ overflowX: 'auto' }} className="flex-shrink-0 w-full flex flex-wrap">


                <div className="w-full lg:w-1/2 md:px-3 mb-6 bg-black rounded bg-opacity-70 hover:scale-90 transition-all">
                    <a className="relative block" href="#">
                        <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                            -15%
                        </span>
                        <img
                            className="w-full h-64 object-cover"
                            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7277c4d1-055c-48d1-81a1-7472255e4244/Sea_Moss_Jar_Mockup.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220909T203708Z&X-Amz-Expires=86400&X-Amz-Signature=3eedebec5253e1a9d934094e88fbba533bfeb68eb849acabc71dd37178102311&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sea%2520Moss%2520Jar%2520Mockup.png%22&x-id=GetObject"
                            alt=""
                        />
                        <div className="px-6 pb-16 mt-12">
                            <div className="px-6 mb-2">
                                <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                    LIFE Bottle 2.0
                                </h3>
                                <p className="mb-4 text-xl font-bold font-heading text-white">
                                    <span>$10.30</span>
                                    <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                        $11.90
                                    </span>
                                </p>
                                <p className="text-blue-100">Great quality, eco material.</p>
                            </div>
                        </div>
                    </a>
                </div>



             

            </div>

        )
    }

    const Title = () => {
        return (
            <h1 className="mb-16 md:mb-24 text-6xl md:text-4xl font-thin font-heading">
                {title ? title : "Title"}
            </h1>

        )
    }

    const CTA = () => {
        return (


            <div className="text-center">
                <a
                    className="inline-block bg-white hover:bg-blue-300 text-black font-bold font-heading py-5 px-8 rounded-md uppercase"
                    href="#"
                >
                    All products
                </a>
            </div>
        )
    }

    return (
        <section className="py-20  overflow-x-hidden">

            <div className="container mx-auto px-4">

                <Title />


                <div className="flex mb-16">


                    <Features />


                    <div className="hidden lg:flex flex-shrink-0 ml-16 opacity-40">
                        <div className="w-full lg:w-1/2 px-3">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-playing-tennis.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            LIFE Bottle 2.0
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$10.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $11.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">Great quality, eco material.</p>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div className="w-full lg:w-1/2 px-3">
                            <a className="relative block bg-blue-300" href="#">
                                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                                    -15%
                                </span>
                                <img
                                    className="w-full h-64 object-cover"
                                    src="yofte-assets/images/placeholder-playing-tennis.png"
                                    alt=""
                                />
                                <div className="px-6 pb-16 mt-12">
                                    <div className="px-6 mb-2">
                                        <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                            LIFE Bottle 2.0
                                        </h3>
                                        <p className="mb-4 text-xl font-bold font-heading text-white">
                                            <span>$10.30</span>
                                            <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                $11.90
                                            </span>
                                        </p>
                                        <p className="text-blue-100">Great quality, eco material.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>


                <CTA />

            </div>
        </section>

    )
}

export default Featured