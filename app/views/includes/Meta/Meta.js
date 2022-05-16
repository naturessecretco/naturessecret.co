import Head from "next/head"
import meta from "@configs/meta"


const Meta = (props) => {

    let { title, impressum } = props

    let IconTags = meta.icons;


    return (

        <Head>
            <title>{title}</title>
            <meta name="keywords" content="your, tags" />
            <meta name="description" content="150 words" />
            <meta name="subject" content="your website's subject" />
            <meta name="copyright" content="company name" />
            <meta name="language" content="EN" />
            <meta name="robots" content="index,follow" />
            <meta name="revised" content={Date.now()} />
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
            <meta name="identifier-URL" content="http://www.websiteaddress.com" />
            <meta name="directory" content="submission" />
            <meta name="category" content="" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="7 days" />
            <meta http-equiv="Expires" content="0" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Cache-Control" content="no-cache"></meta>
            <meta name="description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!" />
            <meta property="og:title" content="Add a Shopping Cart to Any Website in Minutes - Snipcart" />
            <meta property="og:description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!" />
            <meta property="og:url" content="https://snipcart.com/" />
            <meta property="og:type" content="website" />
            <meta name="og:title" content="The Rock" />
            <meta name="og:type" content="movie" />
            <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
            <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
            <meta name="og:site_name" content="IMDb" />
            <meta name="og:description" content="A group of U.S. Marines, under command of..." />

            <meta name="fb:page_id" content="43929265776" />

            <meta name="og:email" content="me@example.com" />
            <meta name="og:phone_number" content="650-123-4567" />
            <meta name="og:fax_number" content="+1-415-123-4567" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Libre+Baskerville&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />

            {

            
                <link rel="apple-touch-icon" href="public/assets/icons/180x180.png" />

            }
        </Head>
    )
}

export default Meta