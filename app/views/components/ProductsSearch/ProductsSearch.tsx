const ProductsSearch = () => {

  return (
    <section className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
            <h2 className="text-5xl font-bold font-heading text-white">
              <span>Found 125 results for</span>
              <a className="relative text-blue-300 underline" href="#">
                Sports
              </a>
            </h2>
          </div>
          <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
            <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
              <select
                className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                name=""
                id=""
              >
                <option value={1}>Sort by newest</option>
                <option value={2}>Sort by price</option>
                <option value={3}>Sort by most popular</option>
              </select>
            </div>
            <a
              className="inline-block mr-3 h-full p-4 bg-white rounded-md border"
              href="#"
            >
              <svg
                width={20}
                height={24}
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={8} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={16} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect y={10} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={8} y={10} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={16} y={10} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect y={20} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={8} y={20} width={4} height={4} rx={2} fill="#2B51C6" />
                <rect x={16} y={20} width={4} height={4} rx={2} fill="#2B51C6" />
              </svg>
            </a>
            <a
              className="inline-block h-full p-4 hover:bg-white border rounded-md group"
              href="#"
            >
              <svg
                className="text-gray-200 group-hover:text-blue-300"
                width={28}
                height={24}
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={4} height={4} rx={2} fill="currentColor" />
                <rect x={8} width={4} height={4} rx={2} fill="currentColor" />
                <rect x={16} width={4} height={4} rx={2} fill="currentColor" />
                <rect x={24} width={4} height={4} rx={2} fill="currentColor" />
                <rect y={10} width={4} height={4} rx={2} fill="currentColor" />
                <rect
                  x={8}
                  y={10}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
                <rect
                  x={16}
                  y={10}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
                <rect
                  x={24}
                  y={10}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
                <rect y={20} width={4} height={4} rx={2} fill="currentColor" />
                <rect
                  x={8}
                  y={20}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
                <rect
                  x={16}
                  y={20}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
                <rect
                  x={24}
                  y={20}
                  width={4}
                  height={4}
                  rx={2}
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:hidden px-3">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Category
                  </a>
                  <ul className="hidden text-left mt-6">
                    <li className="mb-4">
                      <a href="#">New in</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Activewear</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Hoodies &amp; Sweatshirts</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Jackets</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Multipacks</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Bags</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Sports</a>
                    </li>
                    <li className="mb-4">
                      <a href="#">Gifts</a>
                    </li>
                    <li>
                      <a href="#">Notes</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Colors
                  </a>
                  <div className="hidden mt-6 flex flex-wrap">
                    <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                      <div className="rounded-full bg-blue-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-orange-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-900 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-red-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-green-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-pink-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-yellow-300 w-5 h-5" />
                    </button>
                    <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                      <div className="rounded-full bg-gray-100 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Price
                  </a>
                  <div className="hidden mt-6">
                    <input
                      className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                      type="range"
                      min={1}
                      max={100}
                      defaultValue={50}
                    />
                    <div className="flex justify-between">
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $0
                      </span>
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $289
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Size
                  </a>
                  <div className="hidden mt-6 flex flex-wrap -mx-2 -mb-2">
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      36
                    </button>
                    <button className="relative mb-2 mr-1 w-16 border rounded-md">
                      37
                      <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300" />
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      38
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      39
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      40
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      41
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      42
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      43
                    </button>
                    <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                      44
                    </button>
                  </div>
                  <div className="hidden mt-4 text-right">
                    <a
                      className="inline-flex underline text-blue-300 hover:text-blue-400"
                      href="#"
                    >
                      <span className="mr-2">Show all</span>
                      <svg
                        width={14}
                        height={27}
                        viewBox="0 0 14 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                          fill="#3C60D9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Location
                  </a>
                  <div className="hidden mt-6">
                    <label className="flex mb-3 items-center text-lg">
                      <input type="checkbox" />
                      <span className="ml-2">Standard</span>
                    </label>
                    <label className="flex items-center text-lg">
                      <input type="checkbox" />
                      <span className="ml-2">Next day (yes!)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-4 text-center bg-gray-50">
                  <a className="font-bold font-heading" href="#">
                    Location
                  </a>
                  <input
                    className="hidden mt-6 w-full px-8 py-4 bg-white border rounded-md"
                    type="serach"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 px-3">
            <div className="relative mb-6 bg-gray-50">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                -15%
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a href="#">
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src="yofte-assets/images/waterbottle.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full md:w-3/4 px-4">
                  <a className="block mb-8" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      BRILE water filter
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                      <span>$29.89</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $33.69
                      </span>
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum sit lorem ipsum.
                      Morbi placerat eros id porttitor sagittis sagna lorem ipsum.
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href="#"
                    >
                      Add to cart
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-6 bg-gray-50">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                -15%
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4">
                  <a className="mb-4 md:mb-0" href="#">
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src="yofte-assets/images/cycle.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full md:w-3/4 px-4">
                  <a className="block mb-8" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Bicycle S20
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                      <span>$14.30</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $16.90
                      </span>
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum sit lorem ipsum.
                      Morbi placerat eros id porttitor sagittis sagna lorem ipsum.
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href="#"
                    >
                      Add to cart
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-6 bg-gray-50">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300">
                New
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a className="block" href="#">
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src="yofte-assets/images/skateboard.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full md:w-3/4 px-4">
                  <a className="block mb-8" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Kiteboard WH-004
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                      $199.90
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum sit lorem ipsum.
                      Morbi placerat eros id porttitor sagittis sagna lorem ipsum.
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href="#"
                    >
                      Add to cart
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mb-6 bg-gray-50">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300">
                New
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a className="block" href="#">
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src="yofte-assets/images/basketball.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full md:w-3/4 px-4">
                  <a className="block mb-8" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Nike basketball ball
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                      $34.30
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum sit lorem ipsum.
                      Morbi placerat eros id porttitor sagittis sagna lorem ipsum.
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href="#"
                    >
                      Add to cart
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-50">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-blue-300 rounded-full uppercase text-blue-300">
                New
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a className="block" href="#">
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src="yofte-assets/images/waterbottle.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-full md:w-3/4 px-4">
                  <a className="block mb-8" href="#">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      BRILE water filter
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-blue-500">
                      <span>$29.89</span>
                      <span className="text-xs text-gray-500 font-semibold font-heading line-through">
                        $33.69
                      </span>
                    </p>
                    <p className="max-w-md text-gray-500">
                      Maecenas commodo libero ut molestie dictum sit lorem ipsum.
                      Morbi placerat eros id porttitor sagittis sagna lorem ipsum.
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href="#"
                    >
                      Add to cart
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={27}
                          height={27}
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href="#"
                      >
                        <svg
                          className="w-6 h-6"
                          width={24}
                          height={23}
                          viewBox="0 0 24 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                            fill="black"
                            stroke="black"
                            strokeWidth="0.35"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/4 pl-8 pr-3">
            <div className="mb-6 py-10 border-b border-gray-900">
              <h3 className="mb-8 text-2xl font-bold font-heading">Category</h3>
              <ul>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    New in
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Activewear
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Hoodies &amp; Sweatshirts
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Jackets
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Multipacks
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Bags
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Sports
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-lg" href="#">
                    Gifts
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    Notes
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 py-10 border-b border-gray-900">
              <h3 className="mb-8 text-2xl font-bold font-heading">Colors</h3>
              <div className="flex flex-wrap">
                <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                  <div className="rounded-full bg-blue-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-orange-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-gray-900 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-red-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-green-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-pink-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-yellow-300 w-5 h-5" />
                </button>
                <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                  <div className="rounded-full bg-gray-100 w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mb-6 py-10 border-b border-gray-900">
              <h3 className="mb-8 text-2xl font-bold font-heading">Price</h3>
              <div>
                <input
                  className="w-full mb-4 outline-none appearance-none bg-gray-200 h-1 rounded cursor-pointer"
                  type="range"
                  min={1}
                  max={100}
                  defaultValue={50}
                />
                <div className="flex justify-between">
                  <span className="inline-block text-lg font-bold font-heading text-blue-300">
                    $0
                  </span>
                  <span className="inline-block text-lg font-bold font-heading text-blue-300">
                    $289
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-6 py-10 border-b border-gray-900">
              <h3 className="mb-8 text-2xl font-bold font-heading">Size</h3>
              <div className="flex flex-wrap -mx-2 -mb-2">
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  36
                </button>
                <button className="relative mb-2 mr-1 w-16 border rounded-md">
                  37
                  <span className="absolute bottom-0 left-0 w-full py-px bg-blue-300" />
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  38
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  39
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  40
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  41
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  42
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  43
                </button>
                <button className="mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md">
                  44
                </button>
              </div>
              <div className="mt-4 text-right">
                <a
                  className="inline-flex underline text-blue-300 hover:text-blue-400"
                  href="#"
                >
                  <span className="mr-2">Show all</span>
                  <svg
                    width={14}
                    height={27}
                    viewBox="0 0 14 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z"
                      fill="#3C60D9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mb-6 py-10 border-b border-gray-900">
              <h3 className="mb-6 text-2xl font-bold font-heading">Location</h3>
              <label className="flex mb-3 items-center text-lg">
                <input type="checkbox" />
                <span className="ml-2">Standard</span>
              </label>
              <label className="flex items-center text-lg">
                <input type="checkbox" />
                <span className="ml-2">Next day (yes!)</span>
              </label>
            </div>
            <div className="mb-6 py-10">
              <h3 className="mb-6 text-2xl font-bold font-heading">Location</h3>
              <input
                className="w-full px-8 py-4 bg-white border rounded-md"
                type="serach"
                placeholder="City"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProductsSearch