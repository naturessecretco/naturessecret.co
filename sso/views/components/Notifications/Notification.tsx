const Notifications = () => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="py-12 bg-black bg-opacity-50 rounded overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-6 md:pl-12 lg:pr-0 mb-10 md:mb-0">
              <h3 className="mb-2 text-6xl font-medium text-white">
                <span className="text-green-300">Up Next</span>
              </h3>
              <p className="text-xl font-medium text-blue-100">
                Interest Meeting / Expansion
              </p>
            </div>
            <div className="relative w-full md:w-1/2 px-12">
              <img
                className="lg:absolute top-0 lg:mr-12 right-0 lg:-mt-24 lg:h-80 object-cover"
                src="artemis-assets/images/chart-folder.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Notifications