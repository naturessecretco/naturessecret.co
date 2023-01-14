import KofiButton from "kofi-button"
import type { KofiSupportButtonProps } from "@models/typings/KofiSupportButton"

const KofiSupportButton = ({ message, className, kofiID, id, color }: KofiSupportButtonProps) => {


    return (
        <div id={id ? id : "KofiSupportButton"} className={className ? className : "mt-4"}>
            <KofiButton color={color ? color : "#000000"} 
                        title={message ? message : "Message"} 
                        kofiID={kofiID} />
        </div>
    )
}

export default KofiSupportButton