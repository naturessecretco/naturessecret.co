import Image from "next/image"


export type CallToAction = {
    url: string,
    name: string
}
export type Cover = {
    src: string,
    alt: string,
}

export type HeroProps = {

    featured: {
        first: {
            title: string,
            cover: Cover,

        },
        second: {
            title: string,
            cover: Cover,
        },
        third: {
            title: string,
            cover: Cover,
        }
    },

    heading: string,
    title: string,
    cta: CallToAction
}




const Hero = () => {

    return (
        <section className="relative py-20 2xl:py-44 text-white bg-darkBlueGray-500 overflow-hidden rounded-t-10xl">
        <div className="container px-4 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-16">
            <div className="relative mb-10 md:mb-0 text-center md:text-left z-10">
              <span
                className="inline-block py-3 px-7 mb-10 text-lg font-medium font-heading leading-5 text-indigo-500 border border-indigo-500 rounded-6xl"
                href="#"
              >
                Join us today
              </span>
              <h2 className="mb-16 xl:mb-24 font-heading font-medium text-9xl md:text-10xl xl:text-11xl leading-tight">
               Home to Natures Best Kept Secrets
              </h2>
              <a
                className="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Join now
              </a>
            </div>
            <img src="uinel-assets/images/call-to-action/widget.png" alt="" />
          </div>
        </div>
        <img
          className="absolute right-0 top-0"
          src="/assets/images/q.svg"
          alt=""
        />
      </section>
      

    )
}

export default Hero