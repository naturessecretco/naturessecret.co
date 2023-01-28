import Favicon from "@includes/dynamic/Header/Favicon"
import Links from "@includes/dynamic/Header/Links"

import { useMenu } from "@hooks/useMenu"

export default function Header({ favicon, links }) {

  const { toggleMenu } = useMenu()

  return (

    <header className="container fixed top-0 z-20 w-full mx-auto overflow-hidden backdrop-blur-md">
      <div className="py-1 relative top-0 w-full text-center font-serif text-white bg-green-700 bg-opacity-25 text-sm border-opacity-10 border-b border-gray-100">
        <p className="font-medium text-darkBlueGray-300 leading-10">
          <span>Hello, you are new here.</span>
          <span className="text-darkBlueGray-900">Get 20% off card!</span>
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-5">
        <Favicon {...favicon} />
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <Links links={links} />
            <div className="w-auto lg:block snipcart-customer-signin snipcart-checkout">
              <div className="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-green-700 bg-opacity-25 border border-gray-200 cursor-pointer snipcart-customer-signin rounded-xl focus:ring focus:ring-green-300 hover:bg-green-700">
                🛒Cart
              </div>
            </div>
            <div onClick={() => toggleMenu()} className="w-auto ml-2">
              <button onClick={() => toggleMenu()} >
                <svg
                  className="text-green-700 bg-opacity-30 shadow-2xl navbar-burger"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}