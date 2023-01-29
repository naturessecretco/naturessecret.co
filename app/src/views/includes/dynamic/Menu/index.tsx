import { useMenu } from "@hooks/useMenu"
import { useStore } from '@nanostores/react';

export interface MenuProps {
  links?: any[]
}

export default function Menu({ links }: MenuProps) {

  const { menuState, closeMenu, isOpen } = useMenu()

  const menu = useStore(menuState)

  return (
    <>
      {
        menu.isOpen && <div
          className="fixed top-0 bottom-0 left-0 z-50 w-4/6 hidd navbar-menu sm:max-w-xs"
        >
          <div className="fixed inset-0 bg-black navbar-backdrop opacity-30" />
          <nav
            className="relative z-10 h-full pt-8 overflow-y-auto bg-yellow-400 bg-opacity-75 backdrop-blur-sm px-9"
          >
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="/">
                      <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a onClick={() => closeMenu()} className="navbar-burger" href="#close">
                      <svg
                        width="24"
                        height="24"
                        view-box="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full py-16">
                <ul>
                  {
                    links && links.map((link) => (
                      <li className="mb-12">
                        <a className="font-medium hover:text-gray-700" href={link.url}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <button
                        className="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-green-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                        type="button">Support Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      }

    </>
  )
}

