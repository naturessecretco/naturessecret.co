
const HASH_LITERAL = "#"


const Tailblocks = {
  container: 'container mx-auto flex flex-col px-5 py-0 justify-center items-center',
  title: 'bg-gray-600 bg-opacity-50 rounded p-2 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900',
  input: 'w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-green-200 focus:bg-transparent border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-400 ease-in-out',
}

const Hero = (props) => {


  let { id, content, opts } = props

  let { image, title, labelInfo, description, ctx } = content

  return (

    <section id={HASH_LITERAL + id} class="text-gray-600 body-font">
      <div class={Tailblocks.container}>
        <img class="lg:w-2/6 md:w-3/6 w-auto h-full mb-10 object-cover object-center" alt={image.alt} src={image.src} />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 style={{
            fontWeight: 900,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-primary)'
          }} class={Tailblocks.title}>{title}</h1>
          <p style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2em', fontWeight: 600, letterSpacing: '2px' }} class="mb-8 bg-gray-600 bg-opacity-50 rounded p-2leading-relaxed">{description || ""}</p>
          <p style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2em', fontWeight: 600, letterSpacing: '2px' }} class="mb-8 bg-gray-600 bg-opacity-50 rounded p-2leading-relaxed">
            92/102 Vitamins & Nutrients
          </p>

          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full">
            <a class="gumroad-button" href="https://naturessecret.gumroad.com/l/wildcraftedseamoss?wanted=true" data-gumroad-single-product="true">Pre-order on</a>

            </div>
          </div>
        </div>
      </div>
    </section>

  )

}

export default Hero