import "@views/libs/tailwind.css";
import React from 'react';
import { RecoilRoot } from 'recoil';


export default function Application({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
