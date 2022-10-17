export type GumroadButtonProps = {
    gumroad?: string,
    className?: string,
    [key: string]: any
}


const GumroadButton = ({ gumroad, className, ...props }: GumroadButtonProps) => {

    return (
        <a className="gumroad-button ml-4" href={gumroad ?? "URL_NOT_FOUND"} {...props}>{"Order on"}</a>
    )
}

export default GumroadButton