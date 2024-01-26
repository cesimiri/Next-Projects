"use client"
import { useState } from "react"

function Login() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [showErrors, setShotErros] = useState(false)


    const handleInput = (event) => {
        const inputId = event.target.id;
        const value = event.target.value;
        if (inputId === "nombre") {
            setNombre(value)
            console.log(nombre)
        }
        if (inputId === "apellido") {
            setApellido(value);
            console.log(apellido)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombre.trim() === "") {
            setShotErros(true)
        }else {
            setShotErros(false)
        }

        if (apellido.trim() === "") {
            setShotErros(true)
        } else {
            setShotErros(false)
        }

    }

    //poner todos los inputs revisar los ejercicios 

    // const onvalidate =()=>{
    //     const isError= false 
    //     const errors = {}

    //         if (!form.nombre.trim()) {
    //             errors.nombre = "El campo no debe ser vacio"
    //             isError = true 
    //         }

    //         return isError ? errors : null
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     //onvalidate
    //     const err= errors(onvalidate())

    //     if(err === null){
    //         console.log("enviando Formulario")
    //     }else{
    //         setErrors(err)
    //     }
    // }




    // const onValidate =()=>
    return (
        <section className="bg-slate-700 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">

                            {
                                showErrors && <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded relative " role="alert">
                                    <strong className="font-bold">Alerta!</strong>
                                    <span className="block sm:inline"> Debes complentar el campo.</span>
                                </div>
                            }
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text"
                                    name="nombre"
                                    id="nombre"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                    onChange={handleInput}

                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                <input type="text"
                                    name="apellido"
                                    id="apellido"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellido" required=""
                                    onChange={handleInput}
                                />

                            </div>



                            {/* <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div> */}

                            {/* <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded relative " role="alert">
                                <strong className="font-bold">Alerta!</strong>
                                <span className="block sm:inline"> Debes complentar el campo.</span>
                            </div> */}




                            <button
                                type="submit"
                                // onClick={handleSubmit}
                                onClick={handleSubmit}
                                className="w-full text-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Sign in
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login