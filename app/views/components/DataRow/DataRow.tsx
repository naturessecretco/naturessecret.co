const DataRow = () => {

    return (
        <section className="font-medium bg-blueGray-100 rounded-b-10xl py-24 2xl:pt-52 2xl:pb-40">
  <div className="container px-4 mx-auto">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-16 xl:gap-40">
      <div className="max-w-sm mx-auto text-center">
        <img
          className="w-18 h-18 mb-10 mx-auto"
          src="uinel-assets/elements/features/helpdesk.svg"
          alt=""
        />
        <h3 className="mb-10 font-heading text-5xl leading-loose">Helpdesk</h3>
        <p className="font-normal leading-loose text-darkBlueGray-400">
          Donec laoreet sem sollicitudin, mattis mi in, tristique ex.
        </p>
      </div>
      <div className="max-w-sm mx-auto text-center">
        <img
          className="w-18 h-18 mb-10 mx-auto"
          src="uinel-assets/elements/features/devices.svg"
          alt=""
        />
        <h3 className="mb-10 font-heading text-5xl leading-loose">
          3+ devices
        </h3>
        <p className="font-normal leading-loose text-darkBlueGray-400">
          The nulla come commodo eros sit tristique lectus
        </p>
      </div>
      <div className="max-w-sm mx-auto text-center">
        <img
          className="w-18 h-18 mb-10 mx-auto"
          src="uinel-assets/elements/features/plugin.svg"
          alt=""
        />
        <h3 className="mb-10 font-heading text-5xl leading-loose">
          Voice plugin
        </h3>
        <p className="font-normal leading-loose text-darkBlueGray-400">
          Nam ipsum augue, eleifend elementum velit a, mattis sollicitudin
        </p>
      </div>
      <div className="max-w-sm mx-auto text-center">
        <img
          className="w-18 h-18 mb-10 mx-auto"
          src="uinel-assets/elements/features/messages.svg"
          alt=""
        />
        <h3 className="mb-10 font-heading text-5xl leading-loose">
          D.Messages
        </h3>
        <p className="font-normal leading-loose text-darkBlueGray-400">
          Vestibulum non odio non dui fermentum mattis.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

export default DataRow;