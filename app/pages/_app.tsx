import "@libs/animations.css";
import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";
import "@libs/reset.css";
import "@libs/dashvars.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { PageTransition } from 'next-page-transitions';

function Application({ Component, pageProps }: AppProps) {

  return (
    Component ?
      <PageTransition timeout={700} classNames={"page-transition"}>
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
      </PageTransition> : <></>


  )
}

export default Application
