const ContentCarousel = () => {

    return (
        <section className="bg-blueGray-100 py-24 2xl:py-44 overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="text-center">
      <span className="text-sm text-gray-300 uppercase">What people say</span>
      <h2 className="mt-8 mb-24 text-9xl md:text-10xl xl:text-11xl font-heading font-medium">
        Opinion
      </h2>
    </div>
    <div className="flex flex-wrap items-center justify-center -mx-4 mb-16 md:mb-28">
      <div className="w-auto px-4 mb-4 xl:mb-0 text-center order-last sm:order-first">
        <a className="inline-block" href="#">
          <svg
            width={8}
            height={12}
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.21015 10.4594C7.59662 10.8128 7.59662 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.096617 6.28579 -0.096617 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880363 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <div className="w-full sm:w-2/3 max-w-4xl px-4 mx-auto mb-16 sm:mb-0">
        <div className="relative mb-5 py-20 px-8 md:px-20 bg-white rounded-7xl shadow-lg">
          <img
            className="absolute top-0 right-0 mr-12 transform -translate-y-1/2"
            src="uinel-assets/images/team/quote-2.svg"
            alt=""
          />
          <p className="mb-8 text-lg md:text-xl font-heading font-medium">
            Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi
            libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia!
          </p>
          <p className="text-gray-400">
            I haretra neque non mi aliquam, finibus hart bibendum molestie.
            Vestibulum suscipit sagittis dignissim mauris.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 lg:flex-grow mb-8 lg:mb-0">
            <div className="h-full flex items-center py-5 px-8 md:px-20 bg-white rounded-7xl shadow-lg">
              <div className="flex items-center justify-center text-left">
                <img
                  className="mr-8 w-16 h-20 rounded-full object-cover"
                  src="uinel-assets/images/team/placeholder-photo4.png"
                  alt=""
                />
                <div>
                  <h4 className="text-xl font-heading font-medium mb-2">
                    Realyn Richmond
                  </h4>
                  <p className="text-gray-400">ASOS LTD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:flex-grow">
            <div className="h-full py-4 pl-12 pr-4 bg-white rounded-7xl shadow-lg">
              <div className="flex items-center">
                <div className="pr-8 mr-auto">
                  <p className="mb-2 text-base text-gray-400">
                    Realyn's rating
                  </p>
                  <div className="inline-block">
                    <a className="inline-block" href="#">
                      <img
                        className="w-5 h-5"
                        src="uinel-assets/images/team/star-gold.svg"
                        alt=""
                      />
                    </a>
                    <a className="inline-block" href="#">
                      <img
                        className="w-5 h-5"
                        src="uinel-assets/images/team/star-gold.svg"
                        alt=""
                      />
                    </a>
                    <a className="inline-block" href="#">
                      <img
                        className="w-5 h-5"
                        src="uinel-assets/images/team/star-gold.svg"
                        alt=""
                      />
                    </a>
                    <a className="inline-block" href="#">
                      <img
                        className="w-5 h-5"
                        src="uinel-assets/images/team/star-gold.svg"
                        alt=""
                      />
                    </a>
                    <a className="inline-block" href="#">
                      <img
                        className="w-5 h-5"
                        src="uinel-assets/images/team/star.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="inline-block p-5 border border-gray-100 rounded-4xl">
                  <p className="mb-2 text-base text-gray-400">Average grade</p>
                  <span className="text-xl font-medium">4.87</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto px-4 mb-4 xl:mb-0 text-center order-last">
        <a className="inline-block" href="#">
          <svg
            width={8}
            height={12}
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.289848 1.54064C-0.0966159 1.18719 -0.0966159 0.615929 0.289848 0.265087C0.676312 -0.0870581 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.096616 11.3824 -0.096616 10.8112 0.289848 10.4603L4.81927 5.99853L0.289848 1.54064Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </div>
    <div className="h-1">
      <div className="bg-gray-100 h-1/2 w-64 mx-auto rounded-full">
        <div className="w-1/3 h-full bg-purple-500 rounded-full" />
      </div>
    </div>
  </div>
</section>

    )
}

export default ContentCarousel