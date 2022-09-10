import CloseIcon from '@mui/icons-material/Close';
import useBanner from "@hooks/useBanner"
import { CSSTransition } from 'react-transition-group';
import ClickAwayListener from '@mui/material/ClickAwayListener';


export type BannerProps = {
  message?: string
}

const Banner = ({ message }: BannerProps) => {

  const { banner: { isOpen }, toggleBanner } = useBanner()

  return (

    <CSSTransition
      in={isOpen}
      timeout={900}
      unmountOnExit
    >
      <div className="py-2 bg-black">
        <div className="flex items-center justify-center">
          <p className="text-xs font-bold font-heading text-blue-100">
            {message ? message : "Message"}
          </p>
        </div>
        <CloseIcon className="text-white absolute right-0 top-0 m-1" onClick={() => toggleBanner()} />

      </div>
    </CSSTransition>

  )
}

export default Banner