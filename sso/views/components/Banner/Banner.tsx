
const Banner = ({ heading, description, logo }) => {

    return (
        <div className="mb-8 p-8 bg-black bg-opacity-70 rounded">
            <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-2/3 px-4">
                    <h2 className="text-3xl text-white font-bold">
                        {heading}
                    </h2>
                    <p className="text-indigo-50">
                        {description}
                    </p>
                </div>
                <div className="w-full lg:w-1/3 px-4 flex items-center">
                    <img src={logo.src} alt={logo.alt ? logo.alt : "logo"} />
                </div>
            </div>
        </div>

    )
}

export default Banner