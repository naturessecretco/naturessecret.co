import Head from "next/head"
import meta from "@configs/meta"

const Meta = ({ pageTitle }) => {

  return (
    <Head>
      <title>{meta.title} | {pageTitle ? pageTitle : "Home"}</title>

      <meta name="keywords" content="your, tags" />
      <meta name="description" content="150 words" />
      <meta name="subject" content="your website's subject" />
      <meta name="copyright" content="company name" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />
      <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
      <meta name="abstract" content="" />
      <meta name="topic" content="" />
      <meta name="summary" content="" />
      <meta name="Classification" content="Business" />
      <meta name="author" content="name, email@hotmail.com" />
      <meta name="designer" content="" />
      <meta name="copyright" content="" />
      <meta name="reply-to" content="email@hotmail.com" />
      <meta name="owner" content="" />
      <meta name="url" content="http://www.websiteaddrress.com" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat&display=swap"
        rel="stylesheet"
      />



      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon android-chrome icon shortcut"
        sizes="180x180"
        href="/assets/icons/180x180.png"
      />




    </Head>
  )
}

export default Meta