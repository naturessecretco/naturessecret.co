import type { Image } from "@typings/Image"
export type Logo = {
    image: Image,
    url?: string,
    name?: string
}
export type LogoRowProps = {
    heading?: string,
    logos?: Logo[]
}


const LogoRow = ({ heading, logos }: LogoRowProps) => {

    const Logos = () => {
        return (

            <div className="flex flex-wrap -mx-4 justify-between">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/exxon.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/ea-sports.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/eurosport.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/nike.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 md:mb-0">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/aol.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4">
                    <div className="py-12 px-2 rounded-md shadow-2xl">
                        <img
                            className="mx-auto h-6"
                            src="yofte-assets/brands/north-face.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }


    const Heading = () => {
        return (
            <h2 className="mb-8 text-md font-bold font-heading text-white">
                {heading ? heading : "Heading"}
            </h2>
        )
    }


    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <Heading />
                <Logos />
            </div>
        </section>

    )
}

export default LogoRow