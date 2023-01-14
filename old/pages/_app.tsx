import "@libs/animations.css";
import "@libs/dashvars.css";
import "@libs/globals.css";
import "@libs/reset.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";

import 'react-lazy-load-image-component/src/effects/blur.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { PageTransition } from 'next-page-transitions';


function Application({ Component, pageProps }: AppProps & any) {


  return (
    Component ?
      <RecoilRoot>
        {
          Component?.layout ?
            <Component.layout {...pageProps.page.layout}>
              <PageTransition loadingDelay={200} loadingComponent={<>Loading Application</>} timeout={200} classNames={"page-transition"}>
                <Component {...pageProps} />
              </PageTransition>
            </Component.layout>
            :
            <>
              <Component {...pageProps} />
            </>
        }
      </RecoilRoot>
      :
      <>Loading Application</>
  )
}


export default Application
