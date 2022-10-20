import type { CallToActionProps } from "@typings/CallToAction"
import GumroadButton from "../GumroadButton/GumroadButton"
import type { ImageProps } from "@typings/Image"
import utils from "@utils/index"
export type Feature = {
    id?: string
    name?: string,
    cover?: ImageProps,
    description?: string,
    price?: string,
    gumroad: string,
    url?: string,
    value?: string
    discount?: number
}


export type HeroProps = {
    cta?: CallToActionProps
    title?: string,
    features?: Feature[]
}

const $Featured = ({ title, cta, features }: HeroProps) => {
    const PropsObject = {
        name: "featured",
        title: title ? title : 'TITLE_PROPERTY_NOT_FOUND',
        cta: cta ? cta : { url: '', name: 'CTA_PROPERTY_NOT_FOUND' },
        features: features ? features : [{ id: '1', name: 'FEATURE_PROPERTY_NOT_FOUND', cover: 'NOT_FOUND', description: 'lorem ipsum dolor sandour', price: '0', value: '0', discount: '0' }]
    }

    return { ...PropsObject }
}
const Featured = ({ title, cta, features }: HeroProps) => {

    const Features = () => {

        const moneyFormatter = utils().formatters.currency
        return (
            features ? <div className="flex mb-16">
                <div className="flex-shrink-0 w-full flex flex-wrap">

                    {
                        features.map((feature, index) => {
                            return (
                                <div key={index} className="w-full lg:w-1/2 md:px-3 mb-6 cursor-pointer hover:shadow-2xl border-black border-t shadow-lg transition-all hover:bg-yellow-600 hover:bg-opacity-30">
                                    <a className="relative block" href={feature?.url}>
                                        <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-black border-2 border-blue-500 rounded-full text-green-400">
                                            {feature?.discount * 100}% Savings
                                        </span>
                                        <img
                                            className="w-full h-68 object-fit"
                                            src={feature?.cover?.url}
                                            alt={feature?.cover?.alt}
                                        />
                                        <div className="px-6 pb-16 mt-12">
                                            <div className="px-6 mb-2">
                                                <h3 className="mb-3 text-3xl text-white font-bold font-heading">
                                                    {feature.name}
                                                </h3>
                                                <p className="mb-4 text-xl font-bold font-heading text-green-700">

                                                    <span>{moneyFormatter(feature?.price)}</span>
                                                    <span className="text-md text-red-600 opacity-80 font-semibold font-heading line-through">
                                                        {moneyFormatter(feature?.value)}
                                                    </span>

                                                    <GumroadButton gumroad={feature?.gumroad} />
                                                </p>
                                                <p className="text-gray-200 font-bold leading-8 font-xl">{feature?.description}</p>


                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}



                </div>


            </div> : <>FEATURES_NOT_FOUND</>
        )
    }
    return (
        <section className="py-20 overflow-x-hidden font-sans">
            <div className="container mx-auto px-4">
                <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h2>


                <Features />

                <div className="text-center">
                    <a
                        className="inline-block bg-green-700 hover:bg-black duration-200 ease-in  transition-all text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="/products"
                    >
                        All products
                    </a>
                </div>
            </div>
        </section>


    )
}

export { $Featured }
export default Featured