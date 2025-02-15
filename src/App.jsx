import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
                    className={`flex-1 p-4 overflow-y-auto transition-all duration-200 ${isSidebarOpen ? 'ml-[17%] ' : 'ml-0'
                        }`}
                        >
                 
                  <Routes>
                    <Route path="/" element={<Home title={"Home"} />} />
                    <Route path="/plaqueados" element={<Home title={"Plaquedos"} />} />
                    <Route path="/no-plaqueados" element={<Home title={"No Plaquedos"} />} />
                  </Routes> 
       
                </div>
                {/* Termina el contenido principal */}
            </div>
        </div>
    );
};

export default App;