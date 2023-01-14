



const Grid = ({ items, title }) => {

    return (
        <section className="py-20">

            <div className="container mx-auto px-4">
            <h1 className="mt-6 text-4xl mb-2 font-bold leading-tight font-sans font-heading">{title ? title : "TITLE_NOT_FOUND"}</h1>

                <div className="max-w-4xl mx-auto">
         

                    <div className="flex flex-wrap -mx-4">

                        {
                            items?.map((item, index) => (
                                <div key={index} className="w-full md:w-1/2 px-3 mb-6 font-sans rounded-full group">
                                    <div className="text-center p-8  md:p-16 rounded-full shadow-2xl cursor-pointer hover:-translate-y-4 duration-300 bg-yellow-500 bg-opacity-20 hover:bg-opacity-80">
                                        <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-40 h-40 transition-all duration-500 ease-in-out group-hover:h-12 group-hover:w-12 group-hover:-translate-y-9">
                                            <img loading="lazy" className="object-fit h-3/4" src={item?.cover?.url} />
                                        </span>

                                        <p className="text-lg duration-500 ease-in text-gray-200 hidden group-hover:flex opacity-0 group-hover:opacity-100 align-center mb-10">
                                            {item?.description ?? "DESCRIPTION_NOT_FOUND"}
                                        </p>
                                        <h3 className="mb-4 text-2xl text-gray-900 font-bold font-heading group-hover:opacity-40 duration-300">
                                            {item?.title}
                                        </h3>
                                        <p className="mb-6 text-gray-100 font-bold">{item?.heading ?? "FOUND IN: 🟠Honey, 🔴Seamoss"}</p>
                   
                                    </div>
                                </div>

                            ))}

                    </div>



                </div>
            </div>
        </section>


    )
}

export default Grid