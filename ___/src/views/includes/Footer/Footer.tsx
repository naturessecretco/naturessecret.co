
import type { FooterProps } from "@typings/Footer";
import { SocialIcon } from "react-social-icons";



const Footer = ({ copyrights, phone, tag, email, favicon, navLinks, socials, message }: FooterProps) => {

    const Phone = () => {

        const TITLE = "Phone Us"

        return (
            phone ? <div className="w-full px-4 mb-10 lg:w-auto lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-green-700 font-heading">
                    {TITLE}
                </h3>
                <p className="text-2xl font-bold text-gray-900 md:text-3xl font-heading">
                    {phone}
                </p>
            </div> : <></>
        )
    }

    const Email = () => {

        const TITLE = "Email Us"

        return (

            email ? <div className="w-full px-4 mb-10 lg:w-auto lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-green-700 font-heading">
                    {TITLE}
                </h3>
                <p className="flex-wrap text-2xl font-bold text-gray-900 whitespace-pre-wrap md:text-3xl font-heading">
                    {email}
                </p>
            </div> : <></>

        )
    }

    const SocialIcons = () => {

        const TITLE = "Follow Us"

        return (
            socials ? <div className="w-auto px-4 md:ml-auto">
                <div className="flex items-center">
                    <h3 className="mr-10 text-xl font-bold text-green-700 font-heading">
                        {TITLE}
                    </h3>
                    <div className="flex flex-wrap">
                        {socials?.map((social, index) => {
                            return (
                                <SocialIcon className="flex-wrap m-1 ml-2" bgColor="#2d6019" url={social?.url} key={index} />
                            )
                        })}


                    </div>
                </div>
            </div> : <></>

        )
    }


    const NavLinks = () => {


        return (
            navLinks ? <ul className="flex flex-wrap items-center justify-center -mx-3 -mb-4">
                {navLinks?.map((navLink, index) => {
                    return (
                        <li key={index} className="w-1/2 px-3 mb-4 md:w-1/3 lg:w-auto">
                            <a
                                className={"buttonStyles"}
                                href={navLink?.url}
                            >
                                <img className="inline-block h-4 mr-1 hvr-pop" src="/assets/images/dark-leaf.svg" />
                                {navLink?.name}
                            </a>
                        </li>
                    )
                })}

            </ul> : <></>
        )
    }

    const Copyrights = () => {

        return (

            copyrights ? <>
                {
                    copyrights.map((copyright, index) => {
                        return (
                            <div key={index} id={copyright?.text ? copyright.text : "COPYRIGHT_NOTFOUND"} className="mt-10 text-center shine">
                                <h3 className="text-lg font-bold text-black shine">{copyright?.text ? copyright.text : "Copyright"}</h3>
                            </div>)
                    })
                }
            </> : <></>
        )
    }

    const Tag = () => {
        return (
            tag ? <div id={tag?.id ? tag.id : "tag-nature-secret"} className="mt-10 mr-4 text-center">
                <a href={tag?.url ? tag?.url : "#"}>
                    <h4 className="text-sm font-bold text-black bg-opacity-50 hover:text-green-700 tranisition-all">{tag ? tag?.message : "TAG_NOT_FOUND"}</h4>
                </a>
            </div> : <>TAG_NOT_FOUND</>
        )
    }


    const Message = () => {
        return (
            message ? <div id={message?.id ? message?.id : "MESSAGE_NOT_FOUND"} className="mt-10 mr-4 text-center">
                <a href={message?.url ? message?.url : "#"}>
                    <p className="text-xs text-gray-800 bg-opacity-50 tranisition-all">{message.text ? message?.text : "MESSAGE_NOT_FOUND"}</p>
                </a>
            </div> : <>MESSAGE_NOT_FOUND</>
        )
    }


    const Favicon = () => {
        return (
            favicon ? <a
                className="inline-block mb-20 text-3xl font-bold font-heading"
                href={favicon.url}
            >
                <img
                    className="h-24"
                    src={favicon?.image?.url ?? "FAVICON_NOT_FOUND"}
                    alt={favicon?.image?.alt ?? "FAVICON_NOT_FOUND"}
                    width="auto"
                />
            </a> : <></>
        )
    }

    return (

        <section className="w-full py-20 font-sans">
            <div className="container px-4 mx-auto">
                <div className="pb-20 text-center border-b border-black">
                    <Favicon />
                    <NavLinks />

                    <div className="flex flex-wrap mt-20 -mx-4 text-left">
                        <Phone />
                        <Email />
                        <SocialIcons />
                    </div>
                </div>

                <div className="mt-4" id="support">
                </div>

                <div className="flex-col justify-center w-3/4 m-auto text-center align-center col">
                    <Copyrights />
                    <Tag />
                    <Message />
                </div>
            </div>
        </section>

    )
}

export default Footer