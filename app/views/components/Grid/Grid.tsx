



const Grid = ({ items }) => {

    return (
        <section className="py-20">

            <div className="container mx-auto px-4">

                <div className="max-w-4xl mx-auto">
                    <h1 className="mt-6 text-5xl mb-2 leading-tight font-sans font-heading">Benefits in Eating SuperFoods</h1>


                    <div className="flex flex-wrap -mx-4">

                        {
                            items?.map((item, index) => (
                                <div key={index} className="w-full md:w-1/2 px-3 mb-6 font-sans">
                                    <div className="text-center p-8 md:p-16 bg-blue-900 cursor-pointer hover:-translate-y-4 duration-300 bg-opacity-80 rounded">
                                        <span className="inline-flex mb-8 md:mb-16 items-center justify-center w-20 h-20 bg-green-900 rounded-full">
                                            <img src={item.cover.src} />
                                        </span>
                                        <h3 className="mb-4 text-xl text-gray-200 font-bold font-heading">
                                            {item.title}
                                        </h3>
                                        <p className="mb-6">{item.heading}</p>
                                        <p className="text-lg text-gray-500">
                                            {item.description}
                                        </p>
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