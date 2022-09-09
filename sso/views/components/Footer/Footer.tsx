export type NavLink = {
    name: string,
    url: string
}


export type FooterProps = {
    title: string,
    navLinks?: NavLink[]
}


const Footer = ({ title, navLinks }: FooterProps) => {

    return (
        <section className="pt-8 px-6">
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <div className="flex flex-wrap text-sm text-center">

                {
                    navLinks && navLinks.map((link, index) => {
                        return (
                            <a
                                key={`${index}`}
                                className="inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 border-b-2 border-indigo-500 text-indigo-500"
                                href={link.url}
                            >
                                {link.name}
                            </a>

                        )
                    })
                }
            </div>
        </section>

    )
}

export default Footer