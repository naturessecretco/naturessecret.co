import FadeAnimation from "@components/FadeAnimation";
import KofiSupportButton from '@components/KofiSupportButton';
import type { FooterProps } from "@typings/Footer";
import { SocialIcon } from "react-social-icons";



const Footer = ({ copyrights, phone, tag, email, favicon, navLinks, socials, message }: FooterProps) => {

    const Phone = () => {

        const TITLE = "Phone Us"

        return (
            phone ? <div className="w-full lg:w-auto px-4 mb-10 lg:mb-0">
                <h3 className="mb-2 text-xl text-green-700 font-bold font-heading">
                    {TITLE}
                </h3>
                <p className="text-gray-900 text-2xl md:text-3xl font-bold font-heading">
                    {phone}
                </p>
            </div> : <></>
        )
    }

    const Email = () => {

        const TITLE = "Email Us"

        return (

            email ? <div className="w-full lg:w-auto px-4 mb-10 lg:mb-0">
                <h3 className="mb-2 text-xl text-green-700 font-bold font-heading">
                    {TITLE}
                </h3>
                <p className="text-gray-900 text-2xl md:text-3xl font-bold font-heading flex-wrap whitespace-pre-wrap">
                    {email}
                </p>
            </div> : <></>

        )
    }

    const SocialIcons = () => {

        const TITLE = "Follow Us"

        return (
            socials ? <div className="w-auto md:ml-auto px-4">
                <div className="flex items-center">
                    <h3 className="mr-10 text-xl text-green-700 font-bold font-heading">
                        {TITLE}
                    </h3>
                    <div className="flex flex-wrap">
                        <FadeAnimation cascade triggerOnce>
                            {socials?.map((social, index) => {
                                return (
                                    <SocialIcon className="m-1 flex-wrap ml-2" bgColor="#2d6019" url={social?.url} key={index} />
                                )
                            })}
                        </FadeAnimation>



                    </div>
                </div>
            </div> : <></>

        )
    }


    const NavLinks = () => {

        return (
            navLinks ? <ul className="flex flex-wrap -mb-4 -mx-3 items-center justify-center">
                {navLinks?.map((navLink, index) => {
                    return (
                        <li key={index} className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="hover:scale-90 hover:text-yellow-400 inline-block w-38 py-2 px-6 rounded-full  bg-black bg-opacity-80 text-gray-200  hover:bg-gray-900 font-semibold font-heading transition-all"
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
                                <h3 className="shine font-bold text-lg text-black">{copyright?.text ? copyright.text : "Copyright"}</h3>
                            </div>)
                    })
                }
            </> : <></>
        )
    }

    const Tag = () => {
        return (
            tag ? <div id={tag?.id ? tag.id : "tag-nature-secret"} className="mt-10 text-center mr-4">
                <a href={tag?.url ? tag?.url : "#"}>
                    <h4 className="hover:text-green-700 text-sm tranisition-all text-black bg-opacity-50 font-bold">{tag ? tag?.message : "TAG_NOT_FOUND"}</h4>
                </a>
            </div> : <>TAG_NOT_FOUND</>
        )
    }


    const Message = () => {
        return (
            message ? <div id={message?.id ? message?.id : "MESSAGE_NOT_FOUND"} className="mt-10 text-center mr-4">
                <a href={message?.url ? message?.url : "#"}>
                    <p className="text-xs tranisition-all text-gray-800 bg-opacity-50">{message.text ? message?.text : "MESSAGE_NOT_FOUND"}</p>
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

        <section className="py-20 w-full font-sans">
            <div className="container mx-auto px-4">
                <div className="text-center pb-20 border-b border-black">
                    <Favicon />
                    <NavLinks />

                    <div className="flex mt-20 -mx-4 flex-wrap text-left">
                        <Phone />
                        <Email />
                        <SocialIcons />
                    </div>
                </div>

                <div className="mt-4" id="support">
                    <KofiSupportButton color="#000000" message="Support Us" kofiID="naturessecret" />
                </div>

                <div className="flex-col align-center justify-center text-center m-auto col w-3/4">
                    <Copyrights />
                    <Tag />
                    <Message />
                </div>
            </div>
        </section>

    )
}

export default Footer