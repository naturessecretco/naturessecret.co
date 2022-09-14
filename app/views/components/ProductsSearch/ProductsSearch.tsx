import { Fade } from 'react-awesome-reveal';


export type Item = {
  id?: string,
  name?: string,
  description: string,
  cover: string,
  covers?: string[],
  price?: string,
  value?: string
}


export type ProductSearchProps = {
  title?: string,
  items?: Item[],
  tags: string[],
}

const ProductsSearch = ({ title, items, tags }: ProductSearchProps) => {


  const QueryBar = () => {
    return (
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
     
   
      
        <div className="mb-6 py-10">
          <h3 className="mb-6 text-2xl font-bold font-heading">Location</h3>
          <input
            className="w-full px-8 py-4 bg-white border rounded-md"
            type="serach"
            placeholder="City"
          />
        </div>
      </div>
    )
  }

  const Items = () => {

    return (

      items ? <div className="w-full lg:w-3/4 px-3">
        <Fade cascade>
          {items.map((item, index) => (
            <div key={index} className="relative mb-6 bg-black bg-opacity-70 rounded hover:scale-110 hover:bg-opacity-95 transition-all">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                -15%
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a href={`/products/${item.id}`}>
                    <img
                      className="mx-auto md:mx-0 w-40 h-52 object-contain"
                      src={`${item.cover}`}
                      alt=""
                    />
                  </a>
                </div>


                <div className="w-full md:w-3/4 px-4">


                  <a className="block mb-8" href={`/products/${item.id}`}>
                    <h3 className="mb-2 text-xl font-bold text-gray-200 font-heading">
                      {item.name}
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-green-500">
                      <span>{`${item.price}`}</span>
                      <span className="text-sm text-yellow-500 font-semibold font-heading line-through">
                        {`${item.value}`}
                      </span>
                    </p>


                    <p className="max-w-md text-gray-500">
                      {item.description}
                    </p>
                  </a>
                  <div className="flex flex-wrap items-center justify-between">
                    <a
                      className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-green-800 hover:bg-yellow-300 hover:scale-90 transition-all hover:text-black  text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href={`/products/${item.id}`}
                    >
                      Order from Gumroad
                    </a>
                    <div className="ml-auto">
                      <a
                        className="flex-shrink-0 inline-flex mr-4 items-center justify-center w-14 h-14 rounded-md border hover:border-gray-500"
                        href={`/products/${item.id}`}
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
                        href={`/products/${item.id}`}
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
          ))}
        </Fade>


      </div> : <></>


    )
  }

  const Header = () => {
    return (

      <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0">
        <h2 className="text-5xl font-bold font-heading text-gray-300 mb-6">
          <span>{title ? title : "Title"}</span>
        </h2>
      </div>
    )
  }
  const Filters = () => {

    return (
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

    )
  }


  const TagBar = () => {
    return (

      <div className="w-full  px-3">
        <div className="flex flex-wrap -mx-2">

          {
            tags.map((tag, index) => (

              <div key={index} className="w-1/2 md:w-1/3 px-2 mb-4">
                <div className="py-6 px-2 text-center bg-black bg-opacity-70 rounded hover:scale-90 transition-all">
                  <a className="font-bold text-gray-200 font-heading" href="#">
                    {tag}
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
            ))
          }

        </div>
      </div>
    )
  }

  return (

    <section className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
          <Header />
          <TagBar />
          <Filters />
        </div>

        <div className="flex flex-wrap -mx-3">
          <QueryBar />
          <Items />
        </div>

      </div>
    </section>

  )
}

export default ProductsSearch