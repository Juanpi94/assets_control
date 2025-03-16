import MyComponent from "../components/MyComponent";
import Button from "../components/Button";
import { useEffect } from "react";
import useAxiosCrud from "../hooks/useAxiosCrud";

function Test({ title, endpoint }) {
    const { data, loading, error, get, post, put, remove } = useAxiosCrud();

    useEffect(() => {
        fetchData();
    }, [endpoint]); // Se ejecuta cuando el componente se monta o cuando el endpoint cambia

    const fetchData = async () => {
        await get(endpoint); // Obtiene los datos del endpoint
    };

    return (
        <div className="flex flex-col mx-4">
            <h1 className="text-3xl font-semibold text-gray-500">{title}</h1>

            <div className="flex my-4 justify-between">
                <Button text={"Añadir"} Styles={"text-base px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"} />
                <div className="flex">
                    <Button text={"Exportar visibles"} Styles={"text-base rounded-l-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"} />
                    <Button text={"Exportar todos"} Styles={"text-base px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 ml-[3px]"} />
                    <Button text={"Imprimir"} Styles={"text-base px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 ml-[3px]"} />
                </div>
            </div>

            <div className="border-2 border-gray-200 shadow-lg rounded-lg">
                <MyComponent data={data} />
            </div>
        </div>
    );
}

export default Test;
