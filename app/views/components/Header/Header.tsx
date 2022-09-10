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
        <a className="flex-shrink-0 text-3xl font-bold font-heading" href="#">
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
              <li className="hover:rounded hover:bg-black hover:bg-opacity-60 hover:scale-90 transition-all" key={index}>
                <a
                  className="mr-12 inline-block w-full font-bold font-heading hover:text-green-400  text-white" href={link.url}>{link.name}</a>
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
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid white'
      }} className="relative bg-black bg-opacity-30">


        <Banner {...bannerProps} />

        <nav className="relative flex justify-between">
          <div className="px-12 py-6 flex w-full items-center">


            <Favicon />

            <NavLinks />
          </div>

          <div className="hidden xl:flex items-center justify-end mr-12">

            <a className="flex items-center" href="#">

              <Badge color='primary' badgeContent={1}>
                <ShoppingBasketIcon className="text-black" />
              </Badge>

            </a>
          </div>

          <a onClick={() => toggleDrawer()} className="navbar-burger self-center mr-12" href="#">
            <MenuOpenIcon className="text-black" />
          </a>
        </nav>

      </section>
    </Headroom>

  )
}

export default Header