


export type CopyrightProps = {
    text?: string,
}

export type FooterProps = {
    copyrights?: CopyrightProps[],
    phone?: string,
    message?: {
        text?: string,
        id?: string,
        url?: string,
    },
    email?: string
    socials?: any[],
    tag?: {
        message?: string,
        id?: string,
        url?: string,
    },
    favicon?: any,
    navLinks?: any[]
}
