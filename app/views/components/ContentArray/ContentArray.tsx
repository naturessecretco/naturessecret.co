const ContentArray = () => {
    return (
      <section className="py-24 2xl:py-44 font-medium bg-darkBlueGray-500">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-start-1  bg-black bg-opacity-70 md:col-end-7 text-center">
            <div className="flex items-center justify-center mb-10">
              <a
                className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                href="#"
              >
                New in Uinel
              </a>
              <div className="mx-4 w-px h-6 bg-gray-600" />
              <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                2 june
              </p>
            </div>
            <h3 className="mb-16 xl:mb-28 mx-auto font-heading text-7xl xl:text-10xl leading-tight text-white max-w-lg">
              Get inspired from the all designers
            </h3>
            <img
              className="mx-auto"
              src="/assets/images/mock.png"
              alt=""
            />
            <a
              className="relative -top-7 inline-block py-5 px-10 md:mb-10 lg:mb-16 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="#"
            >
              More
            </a>
            <p className="mx-auto font-normal text-base leading-loose text-gray-300 max-w-md">
              Mauris semper mi vel lectus aliquam tincidunt. Quisque venenatis enim
              ut tortor porta vulputate. Aliquam vel dignissim augue, eu iaculis
              diam.
            </p>
          </div>
          <div className="md:col-start-7 md:col-end-13 text-center">
            <div className="flex items-center mb-10 justify-center">
              <a
                className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                href="#"
              >
                UX/UI Design
              </a>
              <div className="mx-4 w-px h-6 bg-gray-600" />
              <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                2 june
              </p>
            </div>
            <h3 className="mb-16 xl:mb-28 mx-auto font-heading text-7xl xl:text-10xl leading-tight text-white max-w-lg">
              Fresh new updates from August
            </h3>
            <img
              className="mx-auto"
              src="uinel-assets/images/blog/blog5-learning.png"
              alt=""
            />
            <a
              className="relative -top-7 inline-block py-5 px-10 md:mb-10 lg:mb-16 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              href="#"
            >
              More
            </a>
            <p className="mx-auto font-normal text-base leading-loose text-gray-300 max-w-md">
              Mauris semper mi vel lectus aliquam tincidunt. Quisque venenatis enim
              ut tortor porta vulputate. Aliquam vel dignissim augue, eu iaculis
              diam.
            </p>
          </div>
        </div>
      </div>
    </section>
    

    )
}

export default ContentArray;