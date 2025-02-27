import { useState } from "react";

function Home() {
    // let [action, setAction] = useState(true);
    // let [message, setMessage] = useState("Apagado");

    // const saySomething = () => {
    //     if (action) {
    //         setMessage("Encendido");
    //         setAction(false);
    //     } else {
    //         setMessage("Apagado");
    //         setAction(true);
    //     }
    // }

    // JSX (JavaScript XML)
    return (
        <section className="h-full">
            <div className="h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-blue-800">Bienvenido al sistema</h1>
                <h2 className="text-3xl font-bold text-blue-600">de control de bienes universitarios</h2>
            </div>
            {/* <div className=" p-2 h-[25%]">
                <p className="text-2xl text-gray-400">Seleccione la opción a realizar</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                <a href="plaqueados" className="block text-center bg-blue-700 p-2 rounded-lg shadow-sm">
                    <h5 className="text-2xl font-bold tracking-tight pt-2 pb-2 text-white">Activos plaqueados</h5>
                </a>
                
            </div> */}
        </section>

    )
}

export default Home;