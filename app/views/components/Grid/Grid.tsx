import type { ImageProps } from "@typings/Image"

import FadeAnimation from "../FadeAnimation"




export type GridProps = {
    items?: any[],
}

const Grid = ({ items }: GridProps) => {


    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">


                    <div className="flex flex-wrap -mx-4">



                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="text-center p-8 md:p-16 bg-black bg-opacity-30">
                                <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-20 h-20 bg-blue-300 rounded-full">
                                    <img src="/assets/images/bodily-healing.svg" />
                                </span>
                                <h3 className="mb-4 text-xl font-bold font-heading">
                                    Free Shipping
                                </h3>
                                <p className="mb-6">From $45</p>
                                <p className="text-lg text-gray-500">
                                    Ante ipsum primis in faucibus orci luctus.
                                </p>
                            </div>
                        </div>


                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <div className="text-center p-8 md:p-16 bg-white">
                                <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-20 h-20 bg-indigo-300 rounded-full">
                                    <img src="/assets/images/emotional-healing.svg" />

                                </span>
                                <h3 className="mb-4 text-xl font-bold font-heading">
                                    Secure Shopping
                                </h3>
                                <p className="mb-6">100% Guarantee</p>
                                <p className="text-lg text-gray-500">
                                    Fusce pharetra lectus felis, eget temp.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className="text-center p-8 md:p-16 bg-white">
                                <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-20 h-20 bg-pink-300 rounded-full">
                                    <img src="/assets/images/immunity.svg" />

                                </span>
                                <h3 className="mb-4 text-xl font-bold font-heading">
                                    Customer Satisfaction
                                </h3>
                                <p className="mb-6">100% Positive Feedbacks</p>
                                <p className="text-lg text-gray-500">
                                    Praesent ultrices ac lectus non placerat!
                                </p>
                            </div>
                        </div>


                        <div className="w-full md:w-1/2 px-3">
                            <div className="text-center p-8 md:p-16 bg-white">
                                <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-20 h-20 bg-orange-300 rounded-full">
                                    <img src="/assets/images/skin-health.svg" />

                                </span>
                                <h3 className="mb-4 text-xl font-bold font-heading">Support</h3>
                                <p className="mb-6">Online Support 24/7</p>
                                <p className="text-lg text-gray-500">
                                    Ante ipsum primis in faucibus orci luctus.
                                </p>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
        </section>


    )
}

export default Grid