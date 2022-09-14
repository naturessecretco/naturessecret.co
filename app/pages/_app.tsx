import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";
import "@libs/animations.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PageTransition } from 'next-page-transitions'


import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageTransition timeout={700} classNames={"page-transition"}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </PageTransition><style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
    </>

  )
}

export default Application
