import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
    // Estado para controlar si el Sidebar está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Función para alternar el estado del Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
                    className={`flex-1 p-4 overflow-y-auto transition-all duration-200 ${isSidebarOpen ? 'ml-64' : 'ml-0'
                        }`}
                >
                    <h1 className="text-xl font-bold">Contenido Principal</h1>
                    {/* Puedes agregar más contenido aquí */}
                </div>
            </div>
        </div>
    );
};

export default App;