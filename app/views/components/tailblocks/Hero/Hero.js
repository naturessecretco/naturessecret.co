
const HASH_LITERAL = "#"


const Tailblocks = {
  container: 'container mx-auto flex flex-col px-5 py-0 justify-center items-center',
  input: 'w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-400 ease-in-out',
}

const Hero = (props) => {


  let { id, content, opts } = props

  let { image, title, labelInfo, description, ctx } = content

  return (

    <section id={HASH_LITERAL + id} class="text-gray-600 body-font">
      <div class={Tailblocks.container}>
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt={image.alt} src={image.src} />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 style={{
            fontWeight: 800
          }} class="bg-gray-600 bg-opacity-50 rounded p-2 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
          <p class="mb-8 leading-relaxed">{description || ""}</p>
          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">{labelInfo}</label>
              <input type="text" id="hero-field" name="hero-field" class={Tailblocks.input} />
            </div>
            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">{ctx}</button>
          </div>
        </div>
      </div>
    </section>

  )

}

export default Hero