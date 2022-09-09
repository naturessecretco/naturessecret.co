import type { AppProps } from 'next/app'
import "@libs/tailwind.css"
import "@libs/globals.css"
import "@libs/scrollbar.css"

function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Application
