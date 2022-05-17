import Head from "next/head"
import meta from "@configs/meta"


const Meta = (props) => {

    let IconTags = meta.icons;
    let SEO = meta.seo;


    return (

        <Head>
            <title>{meta.title}</title>
            <meta name="keywords" content={SEO.keywords.join(' ')} />
            <meta name="description" content="150 words" />
            <meta name="copyright" content={meta.name} />
            <meta name="language" content="EN" />
            <meta name="robots" content="index,follow" />
            <meta name="revised" content={Date.now()} />
            <meta name="summary" content="" />
            <meta name="Classification" content="Business" />
            <meta name="designer" content={meta.designer} />
            <meta name="copyright" content={meta.name} />
            <meta name="reply-to" content={meta.contact.email} />
            <meta name="owner" content="" />

            <meta name="url" content={meta.url} />
            <meta name="identifier-URL" content={meta.url} />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="7 days" />
            <meta http-equiv="Expires" content="0" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="Cache-Control" content="no-cache"></meta>


            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content="Home to Nature's Best Kept Secrets." />
            <meta property="og:url" content={meta.url} />
            <meta property="og:type" content="website" />
            <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
            <meta name="og:site_name" content={meta.name} />


            <meta name="og:email" content={meta.contact.email} />
            <meta name="og:phone_number" content={meta.contact.phone} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Libre+Baskerville&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet" />

            {
                IconTags.sizes.map((tag, index) => (
                    <link rel="android-chrome icon shortcut" sizes={tag}
                        href={IconTags.basePath + tag + IconTags.extension} />

                ))
            }
        </Head>
    )
}

export default Meta