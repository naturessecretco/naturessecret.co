import type { AppProps } from 'next/app'
import "@libs/tailwind.css"
import "@libs/globals.css"

export default function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

