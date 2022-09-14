import type { Favicon } from "@typings/Favicon"
import { SocialIcon } from 'react-social-icons';
import KofiButton from "kofi-button"


export type Social = {
    url: string
}

export type NavLink = {
    name: string,
    url: string
}



export type FooterProps = {
    copyright?: string,
    phone?: string,
    email?: string
    socials?: Social[]
    favicon?: Favicon,
    navLinks?: NavLink[]
}


const Footer = ({ copyright, phone, email, favicon, navLinks, socials }: FooterProps) => {

    const Phone = () => {

        const TITLE = "Phone Us"

        return (
            phone ? <div className="w-full lg:w-auto px-4 mb-10 lg:mb-0">
                <h3 className="mb-2 text-xl text-yellow-200 font-bold font-heading">
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
                <h3 className="mb-2 text-xl text-yellow-200 font-bold font-heading">
                    {TITLE}
                </h3>
                <p className="text-gray-900 text-2xl md:text-3xl font-bold font-heading">
                    {email}
                </p>
            </div> : <></>

        )
    }

    const SocialIcons = () => {
        return (
            socials ? <div className="w-auto md:ml-auto px-4">
                <div className="flex items-center">
                    <h3 className="mr-10 text-xl text-yellow-200 font-bold font-heading">
                        Follow Us
                    </h3>
                    <div className="flex">

                        {socials.map((social, index) => {
                            return (
                                <SocialIcon className="hover:scale-90 transition-all ml-2" bgColor="#000000" fgColor="#fefd21" key={index} url={social.url} />
                            )
                        })}

                    </div>
                </div>
            </div> : <></>

        )
    }


    const NavLinks = () => {

        return (
            navLinks ? <ul className="flex flex-wrap -mb-4 -mx-3 items-center justify-center">
                {navLinks.map((navLink, index) => {
                    return (
                        <li key={index} className="w-1/2 md:w-1/3 lg:w-auto px-3 mb-4">
                            <a
                                className="hover:scale-90 hover:text-yellow-400 inline-block w-38 py-2 px-6 rounded-full  bg-black text-gray-200  hover:bg-gray-900 font-semibold font-heading transition-all"
                                href={navLink.url}
                            >
                                {navLink.name}
                            </a>
                        </li>
                    )
                })}

            </ul> : <></>
        )
    }

    const Copyright = () => {

        return (

            copyright ? <div id="contact" className="mt-10 text-center">
                <h3 className="text-gray-800 font-bold">{copyright ? copyright : "Copyright"}</h3>
            </div> : <></>
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
                    src={favicon.image.src}
                    alt=""
                    width="auto"
                />
            </a> : <></>
        )
    }

    return (

        <section style={{ backdropFilter: 'blur(5px)' }} className="py-20 bg-black bg-opacity-30 w-full">
            <div className="container mx-auto px-4">
                <div className="text-center pb-20 border-b border-white">
                    <Favicon />
                    <NavLinks />

                    <div className="flex mt-20 -mx-4 flex-wrap text-left">
                        <Phone />
                        <Email />
                        <SocialIcons />
                    </div>
                </div>
                <div className="mt-4" id="support">
                    <KofiButton color="#000000" title="Support Us" kofiID="naturessecret" />
                </div>
                <Copyright />
            </div>
        </section>

    )
}

export default Footer