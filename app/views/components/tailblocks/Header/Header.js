import Avatar from "@mui/material/Avatar"
import { AnimationWrapper } from 'react-hover-animation'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = (props) => {

  let { title } = props || {};

  let containerSx = {
    position: 'sticky',
    backdropFilter: 'blur(8px) saturate(130%)',
    zIndex: 100000,
    backgroundColor: '#00808099',
    top: 0,
    left: 'auto',
    width: '100%',
    borderBottom: '1px solid #555555'
  }

  let links = [
    {
      name: 'Featured',
      href: '#featured'
    },
    {
      name: 'Store',
      href: '#store'
    },
    {
      name: 'About Us'
    },
    {
      name: 'Benefits/ FAQs'
    }
  ]

  return (
    <header style={containerSx} class="text-gray-200 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {
            links.map((link, index) => (
              <AnimationWrapper>
                <a key={index}
                  style={{
                    fontFamily: 'Oxygen',
                    fontWeight: 100,
                  }}
                  href={link.href}
                  class="mr-5 hover:text-gray-900 hover:outline-3">{link.name}</a>
              </AnimationWrapper>
            ))
          }
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img src="/assets/images/logo.png" height="45em" width="45em" />
          <span style={{ color: '#FFFFFF' }} class="ml-3 text-xl">Nature's Secret</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Your Basket</button>
        </div>
      </div>
    </header>
  )
}


export default Header;

