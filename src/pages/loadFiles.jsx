import React, { useState } from "react";
import Table from "../components/Table";
import useAxiosCrud from "../hooks/useAxiosCrud";
import Button from "../components/Button";
import * as XLSX from "xlsx";

const LoadFiles = ({ title, endpoint }) => {
    const { data, loading, error, get, post, put, remove } = useAxiosCrud();
    const [isChecked, setIsChecked] = useState(false);
    const [fileData, setFileData] = useState(null);

    const createData = async () => {
        const fileInput = document.getElementById("file_input");
        if (!fileInput || fileInput.files.length === 0) {
            alert("Por favor, seleccione un archivo.");
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const bufferArray = e.target.result;
            const workbook = XLSX.read(bufferArray, { type: "buffer" });

            const sheetName = workbook.SheetNames.includes("Activos General")
                ? "Activos General"
                : workbook.SheetNames.includes("Activos_General")
                    ? "Activos_General"
                    : null;

            if (!sheetName) {
                alert("No se encontró la hoja 'Activos General' o 'Activos_General'.");
                return;
            }

            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            console.log(jsonData);
            setFileData(jsonData);
        };

        reader.readAsArrayBuffer(file);

        await post(endpoint, fileData);
    };

    if (loading) return <div className="text-3xl pb-6 ps-4 font-semibold text-gray-500">Loading...</div>;

    return (
        <div className="flex flex-col mx-4">
            <h1 className="text-3xl pb-6 font-semibold text-gray-500">{title}</h1>
            <div className="w-100 pt-6 ps-20">
                <div className="pt-2 pb-4">
                    <a href="plantilla" className="text-xl text-blue-600 font-light">Descargar plantilla</a>
                </div>
                <div>
                    <h2 className="text-xl pb-2 text-gray-500">Ingrese el archivo a cargar</h2>
                    <div className="w-3/4 gap-2">
                        <input
                            accept=".csv, .xlsx, .xls, .ods"
                            className="block w-full text-2xl text-blue-900 border border-blue-300 rounded-lg cursor-pointer bg-blue-50 dark:text-blue-400 focus:outline-none dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400"
                            type="file"
                            id="file_input"
                        />
                        <div className="pt-3 pb-3 items-center">
                            <input
                                id="checked-checkbox"
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-lg"
                            />
                            <label htmlFor="checked-checkbox" className="ms-2 pt-2 text-md font-medium text-black">
                                Actualizar: Esta opción actualiza registros que ya existen en la base de datos, usar con precaución.
                            </label>
                            <div>
                                <p className="ms-2 text-md text-red-600 pt-2">
                                    Nota: Al usar la opción de actualizar, verifique que los datos en el documento
                                    sean los correctos, ya que prioriza los datos del documento sobre los ya guardados.
                                </p>
                            </div>
                        </div>
                        <Button text={"Subir datos"} onClick={createData} Styles={"text-base px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadFiles;