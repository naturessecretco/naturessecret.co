import '@libs/tailwind.css'
import "@libs/globals.css"
import type { IApplication } from '@typings/Application'
import { RecoilRoot } from 'recoil';
import { SessionProvider } from "next-auth/react"

function Application({ Component, pageProps: { session, ...pageProps } }: IApplication) {

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  )
}

export default Application
