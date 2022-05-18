import { AnimationWrapper } from 'react-hover-animation';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Header = (props) => {

  let { title, links } = props || {};

  let containerSx = {
    position: 'sticky',
    backdropFilter: 'blur(12px) saturate(150%)',
    zIndex: 100000,
    boxShadow: '2px #0000000',
    backgroundColor: '#00000011',
    borderBottom: '1px solid #00000055',
    top: 0,
    left: 'auto',
    width: '100%',
  }



  return (
    <header style={containerSx} class="text-gray-200 body-font">
      <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Button sx={{ outline: 'none' }} startIcon={<MenuIcon />}>
            Menu
          </Button>

          <IconButton aria-label="delete">
            <FaceIcon />
          </IconButton>

          <IconButton aria-label="delete">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
     
          <IconButton aria-label="delete">
            <QuestionAnswerIcon />
          </IconButton>
        </nav>
        <a href="/" class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <img class="ml-3" src="/assets/images/header.png"  />


        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button class="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Pre-order our Wildcrafted Seamoss</button>
        </div>
      </div>
    </header>
  )
}


export default Header;

