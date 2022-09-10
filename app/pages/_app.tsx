import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";
import "@libs/animations.css"


import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default Application
