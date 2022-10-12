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
            src={favicon?.image?.src}
            alt={favicon?.image?.alt}
            width="auto"
          />
        </a> : <></>


    )
  }

  const NavLinks = () => {

    return (
      links ? <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:items-center lg:w-auto">
        <Fade duration={333} cascade triggerOnce>
          {
            links.map((link, index) => {
              return (
                <li className="" key={index}>
                  <a className="mr-8 font-sans inline-block w-full  hover:scale-90 transition-all font-bold font-heading hover:text-green-500  text-black" href={link.url}> <img className="inline-block h-4 mr-1 hvr-pop" src="/assets/images/leaf.svg" />{link.name}</a>
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
      <section className="relative backdrop-blur-3xl">
        <Banner {...banner} />
        <nav className="relative flex justify-between">
          <div className="px-12 py-6 flex w-full items-center">
            <Favicon />
            <NavLinks />
          </div>
          <a onClick={() => toggleDrawer()} className="navbar-burger self-center mr-12 hover:scale-90 transition-all">
            <img className="inline-block h-10 mr-1 hvr-pop" src="/assets/images/dark-leaf.svg" />
          </a>
        </nav>
      </section>
    </Headroom>

  )
}

export default Header