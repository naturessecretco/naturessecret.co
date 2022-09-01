const ContentArray = () => {
    return (
      <section className="py-24 2xl:py-44 font-medium bg-blueGray-100 overflow-hidden rounded-b-10xl">
      <div className="container px-4 mx-auto">
        <span className="block mb-9 uppercase tracking-widest text-xs leading-4 text-gray-300">
          Discover out blog
        </span>
        <h2 className="mb-20 xl:mb-32 text-9xl md:text-10xl xl:text-11xl leading-tight">
          Latest blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-24">
          <div className="relative mx-auto max-w-max">
            <img
              className="h-64 object-cover rounded-t-9xl"
              src="uinel-assets/images/blog/blog3-learning.png"
              alt=""
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 px-2 w-full">
              <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                <div className="flex items-center mb-4">
                  <a
                    className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                    href="#"
                  >
                    New in Uinel
                  </a>
                  <div className="mx-4 w-px h-6 bg-gray-50" />
                  <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                    2 june
                  </p>
                </div>
                <a className="inline-block hover:underline" href="#">
                  <h3 className="font-heading leading-normal text-3xl xl:text-7xl">
                    Get inspired from the all designers
                  </h3>
                </a>
              </div>
            </div>
            <div className="h-44 bg-gray-50 rounded-b-9xl" />
          </div>
          <div className="relative mx-auto max-w-max">
            <img
              className="h-64 object-cover rounded-t-9xl"
              src="uinel-assets/images/blog/blog3-travel.png"
              alt=""
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 px-2 w-full">
              <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                <div className="flex items-center mb-4">
                  <a
                    className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                    href="#"
                  >
                    Community
                  </a>
                  <div className="mx-4 w-px h-6 bg-gray-50" />
                  <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                    1 june
                  </p>
                </div>
                <a className="inline-block hover:underline" href="#">
                  <h3 className="font-heading leading-normal text-3xl xl:text-7xl">
                    Get inspired from the all designers
                  </h3>
                </a>
              </div>
            </div>
            <div className="h-44 bg-gray-50 rounded-b-9xl" />
          </div>
          <div className="relative mx-auto max-w-max">
            <img
              className="h-64 object-cover rounded-t-9xl"
              src="uinel-assets/images/blog/blog3-woman.png"
              alt=""
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 px-2 w-full">
              <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                <div className="flex items-center mb-4">
                  <a
                    className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                    href="#"
                  >
                    UX Design
                  </a>
                  <div className="mx-4 w-px h-6 bg-gray-50" />
                  <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                    1 june
                  </p>
                </div>
                <a className="inline-block hover:underline" href="#">
                  <h3 className="font-heading leading-normal text-3xl xl:text-7xl">
                    Get inspired from the all designers
                  </h3>
                </a>
              </div>
            </div>
            <div className="h-44 bg-gray-50 rounded-b-9xl" />
          </div>
        </div>
      </div>
    </section>
    

    )
}

export default ContentArray;