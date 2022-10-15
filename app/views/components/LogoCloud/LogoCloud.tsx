import type { LogoCloudProps } from "@typings/LogoCloud"


const LogoCloud = ({ title, logos }: LogoCloudProps) => {

    const Title = () => {

        return (
            <h2 className="mb-8 text-sm font-bold font-heading text-gray-400">
                {title ? title : "TITLE_NOT_FOUND"}
            </h2>
        )
    }


    const Logos = () => {
        return (
            logos ?
                <div className="flex flex-wrap -mx-4 justify-between">

                  {
                    logos.map((logo, index) => {
                      return (
                        <div key={index} className="w-1/4 px-4 mb-4">
                          <img src={logo.url} alt={logo.alt} />
                        </div>
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