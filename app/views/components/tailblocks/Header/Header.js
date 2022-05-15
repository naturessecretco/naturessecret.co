import Avatar from "@components/mui/Avatar"

const Header = (props) => {

  let { links, title } = props || {};

  let containerSx = {
    position: 'sticky',
    backdropFilter: 'blur(7px) saturate(130%)',
    zIndex: 100000,
    backgroundColor: '#00808099',
    top: 0,
    left: 'auto',
    width: '100%',
    borderBottom: '1px solid #555555'

  }


  return (
    <header style={containerSx} class="text-gray-200 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#featured" class="mr-5 hover:text-gray-900">Featured</a>
          <a href="#store" class="mr-5 hover:text-gray-900">Store</a>
          <a href="#about" class="mr-5 hover:text-gray-900">About Us</a>
          <a href="#faqs" class="hover:text-gray-900">Benefits/FAQs</a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">

          <span style={{ color: '#FFFFFF' }} class="ml-3 text-xl">Nature's Secret</span>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Your Cart
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}


export default Header;

