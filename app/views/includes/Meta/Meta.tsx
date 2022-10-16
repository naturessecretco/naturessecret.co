import Head from "next/head"
import meta from "@configs/meta"

const Meta = ({ pageTitle }) => {

  const { title: siteTitle } = meta({})

  const Icons = () => {
    return (
      <>

      </>
    )
  }

  return (
    <Head>
      <title>{siteTitle} | {pageTitle ? pageTitle : "Home"}</title>
      <meta name="keywords" content="your, tags" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Home to natures best kept secrets." />
      <meta name="subject" content="your website's subject" />
      <meta name="copyright" content="Nature's Secret" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#CEA11A"/>

      <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
      <meta name="abstract" content="" />
      <meta name="topic" content="" />
      <meta name="summary" content="" />
      <meta name="Classification" content="Health Food Store" />
      <meta name="author" content="name, email@hotmail.com" />
      <meta name="designer" content="" />
      <meta name="copyright" content="" />
      <meta name="reply-to" content="email@hotmail.com" />
      <meta name="owner" content="" />
      <meta name="url" content="http://www.naturessecret.co" />
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