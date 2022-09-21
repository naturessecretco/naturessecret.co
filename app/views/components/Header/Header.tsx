import type { Favicon } from "@typings/Favicon"
import Banner from "@components/Banner"
import Headroom from "react-headroom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Badge from '@mui/material/Badge';
import useDrawer from "@hooks/useDrawer"

export type Link = {
  name: string,
  url: string
}

export type HeaderProps = {
  favicon?: Favicon,
  navLinks?: Link[]
  bannerProps?: any

}



const Header = ({ favicon, navLinks, bannerProps }: HeaderProps) => {

  const { drawer: { isOpen }, toggleDrawer } = useDrawer()


  const Favicon = () => {

    return (

      favicon ?
        <a className="flex-shrink-0 text-3xl font-bold font-heading" href="/">
          <img
            className="h-20"
            src={favicon.image.src}
            alt={favicon.image.alt}
            width="auto"
          />
        </a> : <></>


    )
  }

  const NavLinks = () => {

    return (
      navLinks ? <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:items-center lg:w-auto">
        {
          navLinks.map((link, index) => {
            return (
              <li style={{ fontFamily: 'var(--font-secondary)' }} className="" key={index}>
                <a
                  className="mr-8 inline-block w-full  hover:scale-90 transition-all font-bold font-heading hover:text-green-500  text-black" href={link.url}>{link.name}</a>
              </li>
            )
          })
        }

      </ul> : <></>
    )
  }


  return (

    <Headroom>
      <section style={{
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid gray'
      }} className="relative">


        <Banner {...bannerProps} />

        <nav className="relative flex justify-between">
          <div className="px-12 py-6 flex w-full items-center">


            <Favicon />

            <NavLinks />
          </div>


          <a onClick={() => toggleDrawer()} className="navbar-burger self-center mr-12" href="#">
            <MenuOpenIcon className="text-black h-24" />
          </a>
        </nav>

      </section>
    </Headroom>

  )
}

export default Header