import Carousel from "@components/Carousel"
import RatingsBar from "@components/RatingsBar"
import type { ProductProps } from "@typings/Product"

const $Product = ({ name, price, covers, description }: ProductProps) => {
    const PropsObject = {
        name: name ? name : "NAME_PROPERTY_NOT_FOUND",
        price: price ? price : "PRICE_PROPERTY_NOT_FOUND",
        covers: covers ? covers : [{ src: "IMAGES_PROPERTY_NOT_FOUND", alt: "IMAGES_PROPERTY_NOT_FOUND" }],
        description: description ? description : "DESCRIPTION_PROPERTY_NOT_FOUND"
    }

    return PropsObject
}

const Product = ({ id, name, heading, price, value, discount, covers, tags, description, }: ProductProps) => {

    const Header = () => {

        return (
            <div className="w-full md:w-1/2 px-4">
                <div className="lg:pl-20">
                    <div className="mb-10 pb-10 border-b">
                        <span className="text-gray-900">{heading ? heading : "Heading"}</span>
                        <h2 className="text-gray-900 mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">
                            {name ? name : "Product Name"}
                        </h2>


                        <div className="mb-8">
                            <RatingsBar />
                        </div>


                        <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                            <span>{price}</span>
                            <span className="font-normal text-base text-gray-400 line-through">
                                {value}
                            </span>
                        </p>
                        <p className="max-w-md text-gray-900">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-wrap -mx-4 mb-14 items-center">
                        <div className="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
                            <a
                                className="gumroad-button"
                                href="https://naturessecret.gumroad.com/l/wildcraftedseamoss?wanted=true"
                                data-gumroad-single-product="true"
                            >
                                Order Now!
                            </a>

                        </div>
                        <div className="w-full xl:w-1/3 px-4">
                            <a
                                className="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6"
                                    width={27}
                                    height={27}
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                            <a
                                className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                                href="#"
                            >
                                <svg
                                    className="w-6 h-6"
                                    width={24}
                                    height={23}
                                    viewBox="0 0 24 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                                        fill="black"
                                        stroke="black"
                                        strokeWidth="0.35"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-8 text-gray-500 font-bold font-heading uppercase">
                            SHARE IT
                        </span>
                        <a className="mr-1 w-8 h-8" href="#">
                            <img src="yofte-assets/buttons/facebook-circle.svg" alt="" />
                        </a>
                        <a className="mr-1 w-8 h-8" href="#">
                            <img src="yofte-assets/buttons/instagram-circle.svg" alt="" />
                        </a>
                        <a className="w-8 h-8" href="#">
                            <img src="yofte-assets/buttons/twitter-circle.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 mb-24">


                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <div className="relative mb-10" style={{ height: 560 }}>

                            <Carousel>

                                {
                                    covers ? covers.map((cover, index) => {
                                        return (
                                            <div key={index} className="w-full">
                                                <img
                                                    className="h-64 md:h-full w-full object-cover bg-black bg-opacity-40 rounded"
                                                    src={cover.src}
                                                    alt=""
                                                />
                                            </div>
                                        )
                                    }) : <></>
                                }

                            </Carousel>



                        </div>

                    </div>



                    <Header />

                </div>


                <div>
                    <ul className="flex flex-wrap mb-16 border-b-2">
                        <li className="w-1/2 md:w-auto">
                            <a
                                className="inline-block py-6 px-10 bg-white text-gray-500 font-bold font-heading shadow-2xl"
                                href="#"
                            >
                                Description
                            </a>
                        </li>
                        <li className="w-1/2 md:w-auto">
                            <a
                                className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                                href="#"
                            >
                                Customer reviews
                            </a>
                        </li>
                        <li className="w-1/2 md:w-auto">
                            <a
                                className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                                href="#"
                            >
                                Shipping &amp; returns
                            </a>
                        </li>
                        <li className="w-1/2 md:w-auto">
                            <a
                                className="inline-block py-6 px-10 text-gray-500 font-bold font-heading"
                                href="#"
                            >
                                Brand
                            </a>
                        </li>
                    </ul>
                    <h3 className="mb-8 text-3xl font-bold font-heading text-blue-300">
                        Summer collection and laoreet get
                    </h3>
                    <p className="max-w-2xl text-gray-500">
                        I had interdum at ante porta, eleifend feugiat nunc. In semper euismod
                        mi a accums lorem sad. Morbi at auctor nibh. Aliquam tincidunt placerat
                        mollis. Lorem euismod dignissim, felis tortor ollis eros, non ultricies
                        turpis.
                    </p>
                </div>


            </div>
        </section>

    )
}

export { $Product }
export default Product