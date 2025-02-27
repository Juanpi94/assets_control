import React, { useEffect } from "react";
import Table from "../components/Table";
import useAxiosCrud from '../hooks/useAxiosCrud';
import Button from "../components/Button";

const Container = ({ title, endpoint }) => {
    const { data, loading, error, get, post, put, remove } = useAxiosCrud();

    useEffect(() => {
        fetchData();
    }, [endpoint]); // Se ejecuta cuando el componente se monta o cuando el endpoint cambia

    const fetchData = async () => {
        await get(endpoint); // Obtiene los datos del endpoint
    };

    const createData = async () => {
        await post('/posts', {
            // Área de código para crear un nuevo post
            title: 'New Post', body: 'This is a new post', userId: 1
        });
        fetchData(); // Recargar los datos después de crear un nuevo post
    };

    const updateData = async () => {
        await put('/posts/1', { id: 1, title: 'Updated Post', body: 'This post has been updated', userId: 1 });
        fetchData(); // Recargar los datos después de actualizar un post
    };

    const deleteData = async () => {
        await remove('/posts/1');
        fetchData(); // Recargar los datos después de eliminar un post
    };

    console.log(title);
    console.log(endpoint);
    console.log(data);

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col mx-4">
            <h1 className="text-3xl font-semibold text-gray-500">{title}</h1>
            <div className="flex my-4 justify-between">
                <Button text={"Añadir"} Styles={"text-base px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"} onClick={createData} />
                <div className="flex">
                    <Button text={"Exportar visibles"} Styles={"text-base rounded-l-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"} />
                    <Button text={"Exportar todos"} Styles={"text-base px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 ml-[3px]"} />
                    <Button text={"Imprimir"} Styles={"text-base px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 ml-[3px]"} />
                </div>
            </div>
            <div className="flex gap-4 mb-4">
                <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">Filtrar por:</label>
                    <select name="" id="" className="border-2 border-gray-200 shadow-lg rounded-base px-4 py-2 w-[20rem] text-black h-full">
                        {/* <option value="" disabled selected>Seleccione una opción</option> */}
                        {data && data.length > 0 ? (
                            Object.keys(data[0]).map((key, index) => (
                                <option key={index} value={key} selected={key === "id"} disabled={key === "id"}>
                                    {key !== "id" ? key : "Seleccione una opción"}
                                </option>
                            ))
                        ) : (
                            <option value="" selected disabled>Sin filtros disponibles</option>
                        )}

                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">Buscar</label>
                    <input type="text" className="border-2 border-gray-200 shadow-lg rounded-base px-4 py-2 text-black w-[40rem]" />
                </div>
            </div>

            <div className="border-2 border-gray-200 shadow-lg rounded-lg">
                <Table data={data} />
            </div>
        </div>
    );
};

export default Container;