export type Authenticator = {
    title: string,
}


const Authenticator = ({ title }: Authenticator) => {
    return (
        <section className="py-20  overflow-x-hidden">
            <div className="relative container px-4 mx-auto">
                <div className="relative max-w-4xl mx-auto bg-black bg-opacity-30 transition-all">
                    <div className="absolute inset-0 border border-black-300 my-24 -ml-4 -mr-4" />
                    <div className="relative mx-auto py-28 px-4 border border-black text-center">
                        <a
                            className="inline-block mb-12 text-3xl font-bold font-heading text-white"
                            href="/auth"
                        >
                            <img
                                className="h-36"
                                src="/assets/images/logo.png"
                                alt=""
                                width="auto"
                            />
                        </a>
                        <h2 className="mb-14 text-4xl text-black font-bold font-heading">
                            {title ? title : "Facade"}
                        </h2>
                        <div className="relative max-w-xl mx-auto">



                            <div className="max-w-md mx-auto">
                                <h2 className="mb-10 text-xl text-white font-bold font-heading">
                                    Sign up with Email:
                                </h2>


                                <form action="">

                                    <div className="mb-10">
                                        <label
                                            className="font-bold font-heading bg-transparent text-gray-200"
                                        >
                                            User
                                        </label>
                                        <select
                                            className="block w-full mt-4 py-4 px-8 border text-white bg-transparent border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md bg-black bg-transparent-40"
                                            name="user-types"
                                            id="user-types"
                                        >
                                            <option className='bg-black text-white' value={3}>{"Frantz Desir"}</option>

                                            <option className='bg-black text-white' value={3}>{"Administrator"}</option>

                            

                                        </select>
                                    </div>

                                    <input
                                        className="w-full mb-4 px-12 py-6 border bg-transparent placeholder-white border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                                        type="password"
                                        placeholder="Password"
                                    />


                                    <button className="mt-12 md:mt-16 bg-black hover:bg-yellow-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                                        Sign In
                                    </button>
                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Authenticator