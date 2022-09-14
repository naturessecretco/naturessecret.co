import CloseIcon from '@mui/icons-material/Close';
import useBanner from "@hooks/useBanner"
import { CSSTransition } from 'react-transition-group';

export type BannerProps = {
  message?: string,
  url?: string
}

const Banner = ({ message, url }: BannerProps) => {

  const { banner: { isOpen }, toggleBanner } = useBanner()

  return (

    <CSSTransition
      in={isOpen}
      timeout={900}
      unmountOnExit
    >
      <div className="py-2 bg-black">
        <div className="flex items-center justify-center">
          <p className="text-sm font-bold font-heading text-gray-100 hover:text-gray-400">
            <a href={url}>
              {message ? message : "Message"}

            </a>
          </p>
        </div>
        <CloseIcon className="text-white absolute right-0 top-0 m-1" onClick={() => toggleBanner()} />

      </div>
    </CSSTransition>

  )
}

export default Banner