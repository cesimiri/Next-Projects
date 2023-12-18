
function ResponsivePage() {
    return (
        <div className="bg-gray-100 py-8">

            <section className="w-[90%] max-w-md mx-auto bg-white shadow-2xl
             md:flex md:rounded-2x1 md:max-w-4xl ">

                <article className="bg-gradient-to-b
                from-lime-400 to-lime-800 rounded-b-2xl p-10 text-white
                text-center md:rounded-2xl md:w-1/2 md:grid md:content-center">
                    <p className="text-xl font-bold text-cyan-400">your result</p>
                    <div className="w-36 aspect-square bg-gradient-to-b
                    from-violet-blue to-persian-blue rounded-full mx-auto
                    my-8 grid content-center">
                        <p className="text-5xl font-bold mb-2">76</p>
                        <p className="font-bold text-white">of 100</p>
                    </div>


                    <h3 className="text-3xl mb-4 font-bold ">GREAT</h3>

                    <p className="text-white">You score higher than 65%</p>
                </article>

                <article className="p-10 grid gap-6">
                    <h3 className="text-xl font-bold ">
                        Sumary
                    </h3>
                    <div className="bg-red-100 rounded-r-xl flex py-5 
                    px-6 items-center ">
                        <p className="ml-3 text-lg text-red-700">Reaction</p>
                        <p className="ml-auto font-bold text-blue-800">
                            <span className="text-blue-950">80</span>
                            <span className="text-blue-700"> /100</span>

                        </p>
                    </div>

                    <div className="bg-orange-100 rounded-r-xl flex py-5 
                    px-6 items-center ">
                        <p className="ml-3 text-lg text-red-700">Memory</p>
                        <p className="ml-auto font-bold text-blue-800">
                            <span className="text-blue-950">92</span>
                            <span className="text-blue-700"> /100</span>

                        </p>
                    </div>

                    <div className="bg-green-100 rounded-r-xl flex py-5 
                    px-6 items-center ">
                        <p className="ml-3 text-lg text-red-700">Verbal</p>
                        <p className="ml-auto font-bold text-blue-800">
                            <span className="text-blue-950">92</span>
                            <span className="text-blue-700"> /100</span>

                        </p>
                    </div>
                    
                    <a className="bg-blue-900 rounded-full text-white py-5 text-center
                    font-bold hover:bg-blue-700">Continue</a>

                </article>
            </section>


        </div>
    )
}

export default ResponsivePage