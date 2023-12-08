'use client'

import { useState } from "react";
function SimpleCounter() {
    const [number, setNumber] = useState(0);
    const [molor, setColor] = useState("black");
    const incremant = () => {
        setNumber(number + 1)
    }

    const descrement = () => {
        setNumber(number - 1)
    }
    return (
        <div className="border-2 w-full h-screen flex items-center text-center justify-center">
            <div>
                <h1 className="text-3xl">Counter </h1>

                <h1 className={number >= 0 ? "text-black text-3xl" : "text-red-600 text-3xl"}> {number}</h1>

                <div>
                    <button className="w-6 h-1/2 m-6 border-solid rounded-md border-2 text-xl" type="submit" onClick={descrement}>
                        -
                    </button>
                    <button className="w-6 h-1/2 m-6 border-solid rounded-md border-2 text-xl" type="submit" onClick={incremant}>
                        +
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SimpleCounter