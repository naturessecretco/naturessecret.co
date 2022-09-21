import type { CallToAction } from "@typings/CallToAction"


export type Feature = {
    id?: string
    name?: string,
    cover?: string,
    description?: string,
    price?: string,
    value?: string
    discount?: string
}


export type HeroProps = {
    cta?: CallToAction
    title?: string,
    features?: Feature[]
}

const Featured = ({ title, cta, features }: HeroProps) => {

    const Features = () => {
        return (

            features ? <div className="flex-shrink-0 w-full flex flex-wrap">


                {
                    features.map((feature, index) => {
                        return (
                            <div key={index} className="w-full lg:w-1/2 md:px-3 mb-6 bg-black rounded bg-opacity-50 hover:bg-opacity-90 transition-all">
                                <a className="relative block" href={`/products/${feature.id}`}>
                                    <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-green-500 rounded-full text-green-500">
                                        {feature.discount}
                                    </span>
                                    <img
                                        className="w-full h-64 object-cover"
                                        src={`${feature.cover}`}
                                        alt=""
                                    />
                                    <div className="px-6 pb-16 mt-12">
                                        <div className="px-6 mb-2">
                                            <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                                {feature.name}
                                            </h3>
                                            <p className="mb-4 text-xl font-bold font-heading text-white">
                                                <span>{feature.price}</span>
                                                <span className="text-xs text-blue-100 font-semibold font-heading line-through">
                                                    {feature.value}
                                                </span>
                                            </p>
                                            <p className="text-gray-100">{feature.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}





            </div> : <></>

        )
    }

    const Title = () => {
        return (
            <h1 className="text-black mb-16 md:mb-24 text-6xl md:text-4xl font-thin font-heading">
                {title ? title : "Title"}
            </h1>

        )
    }

    const CTA = () => {
        return (

            cta ? <div className="text-center">
                <a
                    className="inline-block bg-white hover:bg-blue-300 text-black font-bold font-heading py-5 px-8 rounded-md uppercase"
                    href="#"
                >
                    All products
                </a>
            </div> : <></>
        )
    }

    return (
        <section className="py-20 overflow-x-hidden">

            <div className="container mx-auto px-4">

                <Title />


                <div className="flex mb-16">


                    <Features /> 

                </div>


                <CTA />

            </div>
        </section>

    )
}

export default Featured