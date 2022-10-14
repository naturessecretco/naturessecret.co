import "@libs/animations.css";
import "@libs/globals.css";
import "@libs/scrollbar.css";
import "@libs/tailwind.css";
import "@libs/reset.css";
import "@libs/dashvars.css";

import PageLayout from "@layouts/PageLayout";


import PageService from "@controllers/services/pages";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { PageTransition } from 'next-page-transitions';



export type ApplicationProps = AppProps & {
  layout?: any
}

function Application({ Component, pageProps, layout }: ApplicationProps) {


  const { getLayout } = Component as any

  return (
    Component ?
      <PageTransition loadingDelay={200} loadingComponent={<>Loading Application</>} timeout={200} classNames={"page-transition"}>
        <RecoilRoot>
          <PageLayout {...layout}>
            <Component {...pageProps} />
          </PageLayout>
        </RecoilRoot>
      </PageTransition> : <>Loading Application</>


  )
}


Application.getInitialProps = async () => {
  const { getPage } = PageService();
  const { layout } = await getPage("home");
  return { layout };
};

export default Application
