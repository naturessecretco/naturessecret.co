import { useMenu } from "@hooks/useMenu"
import { useStore } from '@nanostores/solid';

export interface MenuProps {
  links?: any[]
}

export default function Menu(props: MenuProps) {

  const { menuState, closeMenu } = useMenu()

  const menu = useStore(menuState)

  return (
    <>
      {
        menu().isOpen && <div
          class="fixed top-0 bottom-0 left-0 z-50 w-4/6 hidd navbar-menu sm:max-w-xs"
        >
          <div class="fixed inset-0 bg-black navbar-backdrop opacity-30" />
          <nav
            class="relative z-10 h-full pt-8 overflow-y-auto bg-yellow-400 bg-opacity-75 backdrop-blur-sm px-9"
          >
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a class="inline-block" href="#">
                      <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a onClick={() => closeMenu()} class="navbar-burger" href="#">
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
              <div class="flex flex-col justify-center w-full py-16">
                <ul>
                  <li class="mb-12">
                    <a class="font-medium hover:text-gray-700" href="#">Features</a>
                  </li>
                  <li class="mb-12">
                    <a class="font-medium hover:text-gray-700" href="#">Solutions</a>
                  </li>
                  <li class="mb-12">
                    <a class="font-medium hover:text-gray-700" href="#">Resources</a>
                  </li>
                  <li>
                    <a class="font-medium hover:text-gray-700" href="#">Pricing</a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full pb-8">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <div class="block">
                      <button
                        class="w-full px-5 py-3 font-semibold text-white transition duration-200 ease-in-out bg-green-600 border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                        type="button">Try 14 Days Free Trial</button
                      >
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

