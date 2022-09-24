import "@libs/animations.css";
import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { PageTransition } from 'next-page-transitions';


const queryClient = new QueryClient()

function Application({ Component, pageProps }: AppProps) {

  return (
    Component ?
      <PageTransition timeout={700} classNames={"page-transition"}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />

            </Hydrate>
          </QueryClientProvider>
        </RecoilRoot>
      </PageTransition> : <></>


  )
}

export default Application
