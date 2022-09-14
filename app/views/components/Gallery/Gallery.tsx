import Carousel from "@components/Carousel"

export type Gallery = {
    title?: string
}


const Gallery = () => {

    return (
        <section className="transition-all  relative py-20 md:pt-32 overflow-x-hidden">

            <div className="relative container px-4 mx-auto">
                <h2 className="mb-20 text-5xl text-black font-bold font-heading">
                    What Customers Say
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 border border-gray-500 my-8 -ml-6 -mr-6" />
                    <div className="relative mx-auto mb-20 py-12 md:py-2 border border-black">
                        <Carousel />
                        <div className="relative max-w-2xl px-4 mx-auto">
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        Show More
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Gallery