
import type { BannerProps } from '@typings/Banner';
import { CSSTransition } from 'react-transition-group';


const Banner = ({ message, url }: BannerProps) => {


  return (

    <div className={`py-2 bg-black ${!false ? "swing-out-top-bck" : ""} bg-opacity-90 font-sans`}>
      <div className="flex items-center justify-center">
        <p className="text-sm font-bold text-gray-300 font-heading hover:text-green-600">
          <a className="shine " href={url}>
            {message ? message : "Message"}
          </a>
        </p>
      </div>

    </div>

  )
}

export default Banner