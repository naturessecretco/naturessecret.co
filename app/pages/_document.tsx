import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Meta from "@includes/Meta"

import Script from 'next/script'


class Document extends NextDocument<any> {
    render() {
        return (
            <Html>
                <Head>
                    <Script strategy='beforeInteractive' src="https://gumroad.com/js/gumroad.js" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" as="font" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document