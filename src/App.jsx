import React, { useState, useEffect, use } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import Home from './pages/Home';
import jsonData from '../src/info.json'; // Asegúrate de importar los datos correctamente
const App = () => {
    // Estado para controlar si el Sidebar está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [data, setData] = useState([
        {
            "plaqueados": [],
            "noPlaqueados": []
        }
    ]);

    useEffect(() => {
        setData([
            {
                "plaqueados": jsonData["Activos General"].filter((item) => item.Placa != "pendiente"),
                "noPlaqueados": jsonData["Activos General"].filter((item) => item.Placa == "Pendiente")
            }
        ]);
    }, [jsonData]);

   /*  useEffect(() => {
        if (data[0]) {
            console.log(data[0].plaqueados);
        }
    }, [data]);
 */
    // Función para alternar el estado del Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

console.log(jsonData);
    return (
      <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            {/* Contenedor principal (Sidebar y contenido) */}
            <div className="flex flex-1 pt-16">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} />

                {/* Contenido principal */}
                <div
                    className={`flex-1 p-4 overflow-y-auto transition-all duration-200 ${isSidebarOpen ? 'ml-[17%] ' : 'ml-0'
                        }`}
                        >
                 
                  <Routes>
                    <Route path="/" element={<Home title={"Home"}  />} />
                    <Route path="/plaqueados" element={<Home title={"Activos plaquiados"} data={data[0].plaqueados} />} />
                    <Route path="/no-plaqueados" element={<Home title={"Activos no plaquiados"} data={data[0].noPlaqueados} />} />
                  </Routes> 
       
                </div>
                {/* Termina el contenido principal */}
            </div>
        </div>
    );
};

export default App;