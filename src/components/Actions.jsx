import { useState } from "react";

function Actions() {
    let [action, setAction] = useState(true);
    let [message, setMessage] = useState("Apagado");

    const saySomething = () => {
        if (action) {
            setMessage("Encendido");
            setAction(false);
        } else {
            setMessage("Apagado");
            setAction(true);
        }
    }

    // JSX (JavaScript XML)
    return (
        <div>
            <h1 onClick={saySomething} className="text-4xl text-center mt-10 mb-5 cursor-pointer"> {message} </h1>

            <p className="text-center">Click en el texto para cambiar el nombre</p>

            <div className="flex justify-center mt-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saySomething}> {action ? "Activar" : "Desactivar"}</button>
            </div>
        </div>
    )
}

export default Actions
