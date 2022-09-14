export type CommentBoxProps = {
    key?: any,
    title?: string,
    source?: string,
}


const CommentBox = ({ key, title, source }: CommentBoxProps) => {

    return (
        <div className="bg-black bg-opacity-90" key={key}>
            <div className="max-w-md mx-auto px-4">
                <h3 className="mb-16 text-2xl font-bold font-heading text-gray-200">
                    {title}
                </h3>
                <div className="flex flex-wrap items-center">
                    <p className="mb-6 md:mb-0 text-gray-200">{source}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentBox