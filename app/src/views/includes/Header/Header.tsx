import Banner from "@views/components/dynamic/Banner";

import Headroom from "react-headroom";
import type { HeaderProps } from "@typings/Header";
import ButtonsSx from "@views/styles/Buttons";

const Header = ({ favicon, links, banner }: HeaderProps) => {


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

    const buttonStyle = ButtonsSx().tw()

    return (
      links ? <ul className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:m-auto ">
        {
          links.map((link, index) => {
            return (
              <li className="ml-5 mr-5 duration-200 ease-in hover:scale-90" key={index}>

                <a className={buttonStyle} href={link?.url}>
                  <span>
                    <img className="inline-block h-4 hvr-pop" loading="eager" src="/assets/images/dark-leaf.svg" />
                    {link?.name}
                  </span>

                </a>
              </li>
            )
          })
        }


      </ul> : <></>
    )
  }


  return (

    <Headroom>
      <section className="relative w-full bg-transparent outline-none backdrop-blur-xl">
        <Banner {...banner} />
        <nav className="relative flex justify-between">
          <div className="flex items-center w-full px-12 py-6">
            <Favicon />
            <NavLinks />
          </div>
          <a className="self-center mr-12 transition-all cursor-pointer navbar-burger hover:scale-110 duration-250">
            <img className="inline-block h-10 mr-1 hvr-pop" src="/assets/images/dark-leaf.svg" />
          </a>
        </nav>
      </section>
    </Headroom>

  )
}

export default Header