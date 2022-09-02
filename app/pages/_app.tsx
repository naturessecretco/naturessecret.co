import type { AppProps } from 'next/app'
import "@libs/globals.css"
import "@libs/tailwind.css"


export default function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

