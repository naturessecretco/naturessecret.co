export interface BannerProps {
    message?: {
        text?: any;
        url?: string
    }
}

export const defaultProps = {
    message: {
        text: "[@props]: BANNER_TEXT_NOT_FOUND",
        url: "[@props]: BANNER_URL_NOT_FOUND"
    }
}

export default function Banner({ message }: BannerProps) {

    return (
        <div className="py-1 relative top-0 w-full text-center font-serif text-white bg-green-700 bg-opacity-25 text-sm border-opacity-10 border-b border-gray-100">
            <p className="font-medium text-darkBlueGray-300 leading-10">
                <a href={message?.url ?? defaultProps.message.url}>{message?.text ?? defaultProps.message.text}</a>
            </p>
        </div>
    )
}