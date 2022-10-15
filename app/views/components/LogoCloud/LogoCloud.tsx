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
        <div className="flex flex-wrap -mx-4 flex-row space-between justify-center">

          {
            logos.map((logo, index) => {
              return (
                <a key={index} className="bg-yellow-600 mr-14 hover:translate-y-3 ease-in-out duration-500 hover:bg-opacity-50 hover:bg-black rounded-full h-64 w-64 bg-opacity-30 shadow-2xl drop-shadow"href={logo?.url}>
                  <div className="w-1/8 px-4 mb-4">
                    <img className="h-64 w-64"src={logo?.image?.url ?? "IMAGE_NOT_FOUND"} alt={logo?.image?.alt ?? "IMAGE_NOT_FOUND"} />
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