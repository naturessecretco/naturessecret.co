import Banner from "@components/Banner";
import useDrawer from "@hooks/useDrawer";
import { Fade } from "react-awesome-reveal";
import Headroom from "react-headroom";
import type { HeaderProps } from "@typings/Header";

const Header = ({ favicon, links, banner }: HeaderProps) => {

  const { drawer, toggleDrawer } = useDrawer()


  const Favicon = () => {

    return (

      favicon ?
        <a className="flex-shrink-0 text-3xl font-bold font-heading" href="/">
          <img
            className="h-20"
            src={"/assets/images/logo.png"}
            alt={favicon?.image?.alt}
            width="auto"
          />
        </a> : <></>


    )
  }

  const NavLinks = () => {

    return (
      links ? <ul className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:m-auto ">
        <Fade duration={500} cascade triggerOnce>
          {
            links.map((link, index) => {
              return (
                <li className="ml-5 mr-5 hover:scale-90 duration-200 ease-in" key={index}>

                  <a className="font-sans transition-all font-bold font-heading hover:text-green-500  text-black hover:bg-black hover:bg-opacity-70 hover:shadow-xl py-2 px-2 hover:rounded-full" href={link?.url}>
                    <span>
                      <img className="h-4 hvr-pop inline-block" loading="eager" src="/assets/images/dark-leaf.svg" />
                      {link?.name}
                    </span>

                  </a>
                </li>
              )
            })
          }
        </Fade>


      </ul> : <></>
    )
  }


  return (

    <Headroom>
      <section className="relative backdrop-blur-xl w-full bg-transparent outline-none">
        <Banner {...banner} />
        <nav className="relative flex justify-between">
          <div className="px-12 py-6 flex w-full items-center">
            <Favicon />
            <NavLinks />
          </div>
          <a onClick={() => toggleDrawer()} className="navbar-burger self-center mr-12 hover:scale-110 duration-250 transition-all cursor-pointer">
            <img className="inline-block h-10 mr-1 hvr-pop" src="/assets/images/dark-leaf.svg" />
          </a>
        </nav>
      </section>
    </Headroom>

  )
}

export default Header