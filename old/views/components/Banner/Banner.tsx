import useBanner from "@hooks/useBanner";
import type { BannerProps } from '@models/typings/Banner';
import CloseIcon from '@mui/icons-material/Close';
import { CSSTransition } from 'react-transition-group';


const Banner = ({ message, url }: BannerProps) => {

  const { banner: { isOpen }, toggleBanner } = useBanner()

  return (

    <CSSTransition
      in={isOpen}
      timeout={200}
      unmountOnExit
    >
      <div className={`py-2 bg-black ${!isOpen ? "swing-out-top-bck" : ""} bg-opacity-90 font-sans`}>
        <div className="flex items-center justify-center">
          <p className="text-sm font-bold font-heading text-gray-300 hover:text-green-600">
            <a className="shine " href={url}>
              {message ? message : "Message"}

            </a>
          </p>
        </div>
        <CloseIcon className="text-white hover:text-green-600 transition-all absolute right-3 top-1" onClick={() => toggleBanner()} />

      </div>
    </CSSTransition>

  )
}

export default Banner