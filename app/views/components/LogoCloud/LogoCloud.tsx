import type { LogoCloudProps } from "@typings/LogoCloud"


const LogoCloud = ({ title, logos }: LogoCloudProps) => {

  const Title = () => {

    return (
      <h1 className="mb-8 text-4xl font-heading font-bold text-black font-sans">
        {title ? title : "TITLE_NOT_FOUND"}
      </h1>
    )
  }


  const Logos = () => {
    return (
      logos ?
        <div className="flex transition-all m-auto justify-center items-baseline">

          {
            logos.map((logo, index) => {
              return (
                <a key={index} className="m-0 h-full w-full cursor-pointer items-baseline">
                  <div className="w-full group px-4 mb-4 h-full rounded-full group-hover:bg-opacity-30 group-hover:bg-yellow-400 transition-all ease-in-out delay-200">
                    <img className="h-full rounded-full w-full group-hover:translate-y-10 m-auto self-center snap-center duration-700 ease-in-out transition-all  group-hover:h-1/2 group-hover:w-1/2"src={logo?.image?.url ?? "IMAGE_NOT_FOUND"} alt={logo?.image?.alt ?? "IMAGE_NOT_FOUND"} />
                    <p className="text-center font-sans text-white bold text-lg duration-500 text-wrap -translate-y-14 opacity-0 group-hover:opacity-100 delay-300">{logo?.name ?? "Non-Genetically Modifed"}</p>

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