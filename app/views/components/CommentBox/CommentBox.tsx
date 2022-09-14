export type CommentBoxProps = {
    key?: any,
    comment?: string,
    author?: string
}


const CommentBox = ({ comment, author }: CommentBoxProps) => {

    return (
        <div>
            <div className="max-w-md mx-auto px-4">
                <h3 className="mb-16 text-2xl font-bold font-heading text-black">
                    Tonight I had interdum at ante porta, eleifend feugiat nunc. In
                    semper euismod mi a accumsan. Thaaank you! 👏💥
                </h3>
                <div className="flex flex-wrap items-center">
                    <p className="mb-6 md:mb-0 text-gray-700">Alice Kenowski, NYC</p>

                </div>
            </div>
        </div>
    )
}

export default CommentBox