import { Fade } from 'react-awesome-reveal';
import type { ImageProps } from "@typings/Image"

export type Item = {
  id?: string,
  name?: string,
  description: string,
  cover?: ImageProps,
  order?: any,
  price?: string,
  url?: string,
  gumroad?: string,
  value?: string
  discount?: string | number
}


export type ProductSearch = {
  title?: string,
  items?: Item[],
  tags: string[],
}


const ProductsSearch = ({ title, items, tags }: ProductSearch) => {


  const QueryBar = () => {
    return (
      <div className="hidden lg:block w-1/4 pl-8 pr-3 font-sans">
        <div className="mb-6 py-10 border-b border-gray-900">
          <h3 className="mb-8 text-2xl font-bold font-heading">Category</h3>
          <ul>
            <li className="mb-4">
              <a className="text-lg" href="#">
                Seamoss              </a>
            </li>
            <li className="mb-4">
              <a className="text-lg" href="#">
                Honey
              </a>
            </li>
            <li className="mb-4">
              <a className="text-lg" href="#">
                Gummies
              </a>
            </li>


          </ul>
        </div>
      </div>
    )
  }

  const Items = () => {

    return (

      items ? <div className="w-full lg:w-3/4 px-3">
        <Fade triggerOnce cascade>
          {items.map((item, index) => (
            <div key={index} className="relative mb-4 bg-black bg-opacity-10 rounded  hover:shadow-2xl hover:bg-opacity-25 transition-all">
              <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-gray-900 border-2 border-green-500 rounded-full text-green-500">
                {item.discount ? item.discount : "0"}% OFF
              </span>
              <div className="flex flex-wrap items-center -mx-4 px-8 md:px-20 py-12">
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                  <a href={`${item?.url}`}>
                    <img
                      className="mx-auto md:mx-0 w-52 h-52 object-contain"
                      loading="lazy"
                      src={`${item?.cover?.url}`}
                      alt={`${item?.cover?.alt}`}
                    />
                  </a>
                </div>


                <div className="w-full md:w-3/4 px-4 font-sans">


                  <a className="block mb-8" href={`${item?.url}`}>
                    <h3 className="mb-2 text-xl font-bold text-gray-200 font-heading">
                      {item.name}
                    </h3>
                    <p className="mb-6 text-lg font-bold font-heading text-green-500">
                      <span>{`$${item.price}`}</span>
                      <span className="text-sm text-yellow-500 font-semibold font-heading line-through">
                        {`$${item.value}`}
                      </span>
                    </p>


                    <p className="max-w-full text-lg text-gray-200">
                      {item.description}
                    </p>
                  </a>




                  <div className="flex flex-wrap mt-4 justify-items-start">

                    <a
                      className="gumroad-button m-1"
                      href={item.gumroad}
                      data-gumroad-single-product="true"
                    >
                      Order Now!
                    </a>
                    <a
                      className="inline-block w-auto m-1 md:w-auto mb-4 md:mb-0 md:mr-4 text-center bg-green-800 hover:bg-yellow-300 hover:scale-90 transition-all hover:text-black  text-white font-bold font-heading py-4 px-8 rounded-md uppercase"
                      href={`${item.url}`}
                    >
                      Learn More
                    </a>


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

      <div className="w-full lg:w-auto px-4 mb-12 xl:mb-0 mt-6 font-sans">
        <h2 className="text-5xl font-bold font-heading text-gray-900 mb-6">
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
                </div>
              </div>
            ))
          }

        </div>
      </div>
    )
  }

  return (

    <section className="py-22">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between">
          <Header />
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