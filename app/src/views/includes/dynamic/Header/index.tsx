import Favicon from "@includes/dynamic/Header/Favicon"
import Links from "@includes/dynamic/Header/Links"

import { useMenu } from "@hooks/useMenu"
import { createSignal } from "solid-js"


export default function Header({ favicon, links }) {

  const { toggleMenu } = useMenu()


  return (
    <header class="container sticky z-20 w-full mx-auto overflow-hidden backdrop-blur-sm">
      <div class="flex items-center justify-between px-4 py-5">
        <Favicon {...favicon} />
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <Links links={links} />
            <div class="hidden w-auto lg:block snipcart-customer-signin snipcart-checkout">
              <div class="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-green-700 bg-opacity-25 border border-gray-200 cursor-pointer snipcart-customer-signin rounded-xl focus:ring focus:ring-green-300 hover:bg-green-700">
                🛒Cart
              </div>
            </div>
            <div class="w-auto ml-2">
              <a onClick={() => toggleMenu()} href="#">
                <svg
                  class="text-green-700 navbar-burger"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}