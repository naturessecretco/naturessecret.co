import type { LogoCloudProps } from "@typings/LogoCloud"


const LogoCloud = ({ title, logos }: LogoCloudProps) => {

  const Title = () => {

    return (
      <h1 className="mb-8 text-3xl font-heading font-bold text-black font-sans">
        {title ? title : "TITLE_NOT_FOUND"}
      </h1>
    )
  }


  const Logos = () => {
    return (
      logos ?
        <div className="flex flex-wrap-reverse transition-all items-center justify-center">

          {
            logos.map((logo, index) => {
              return (
                <a key={index} className="bg-yellow-600 group mr-4 mt-2 m-auto hover:-translate-y-3 ease-in-out duration-500 hover:bg-opacity-50 hover:bg-black rounded-full h-64 w-64 bg-opacity-30 shadow-2xl drop-shadow"href={logo?.url}>
                  <div className="w-full px-4 mb-4 h-full">
                    <img className="h-full w-full group-hover:-translate-y-1 m-auto self-center snap-center duration-700 ease-in-out transition-all group-hover:h-1/2 group-hover:w-1/2"src={logo?.image?.url ?? "IMAGE_NOT_FOUND"} alt={logo?.image?.alt ?? "IMAGE_NOT_FOUND"} />
                  </div>
                </a>
              )
            })
          }


        </div> : <>LOGOS_NOT_FOUND</>
    )
  }


  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Title />
        <Logos />
      </div>
    </section>

  )
}

export default LogoCloud