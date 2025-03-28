import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { api } from "../hooks/axiosClients";
import Button from "../components/Button";

const Container = ({ title, endpoint }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
        setData([]);  // Limpiar los datos cuando cambie el endpoint
    }, [endpoint]); // Se ejecuta cuando el componente se monta o cuando el endpoint cambia

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(endpoint);
            setData(response.data);
        } catch {
            setError("Error al obtener datos");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const createData = async () => {
        try {
            await api.post("/posts", {
                title: "New Post",
                body: "This is a new post",
                userId: 1
            });
            fetchData();
        } catch (err) {
            console.error("Error al crear datos", err);
        }
    };

    const updateData = async () => {
        try {
            await api.put("/posts/1", {
                id: 1,
                title: "Updated Post",
                body: "This post has been updated",
                userId: 1
            });
            fetchData();
        } catch (err) {
            console.error("Error al actualizar datos", err);
        }
    };

    const deleteData = async () => {
        try {
            await api.delete("/posts/1");
            fetchData();
        } catch (err) {
            console.error("Error al eliminar datos", err);
        }
    };

    if (loading) return <div className="text-3xl pb-6 ps-4 font-semibold text-gray-500">Cargando...</div>;
    // if (error) return <div className="text-3xl pb-6 ps-4 font-semibold text-red-500">{error}</div>;

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

            <div className="border-2 mt-3 border-gray-200 shadow-lg rounded-lg">
                <Table data={data} />
            </div>
        </div>
    );
};

export default Container;
