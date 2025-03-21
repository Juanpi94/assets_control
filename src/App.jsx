import { useState, } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Test from './pages/Test';
import { Route, Routes } from 'react-router-dom';
import Container from './pages/Container';
import LoadFiles from './pages/loadFiles';
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
                    className={`flex-1 p-4 overflow-y-auto transition-all duration-200 ${isSidebarOpen ? 'ml-[17%] ' : 'ml-0'}`}
                >
                    {/* Rutas de la aplicación */}
                    <Routes>
                        {/* Ruta de Activos */}
                        <Route path="/" element={<Home />} />
                        <Route path="/plaqueados" element={<Container title={"Activos plaqueados"} endpoint={'activos-plaqueados'} />} />
                        <Route path="/no-plaqueados" element={<Container title={"Activos no plaqueados"} endpoint={'activos-no-plaqueados'} />} />
                        <Route path="/tipos" element={<Container title={"Tipos"} endpoint={'types'} />} />
                        <Route path="/subtipos" element={<Container title={"Subtipos"} endpoint={'subtypes'} />} />
                        <Route path="/marcas" element={<Container title={"Marcas"} endpoint={'marks'} />} />
                        <Route path="/modelos" element={<Container title={"Modelos"} endpoint={'asset-models'} />} />
                        <Route path="/compras" element={<Container title={"Compras"} endpoint={'purchases'} />} />
                        <Route path="/redes" element={<Container title={"Redes"} endpoint={'nettings'} /> } />

                        {/* Trámites */}
                        <Route path="/traslados" element={<Test title="Generar traslado" endpoint={'subtypes'} />} />

                        {/* Gestion */}
                        <Route path="/funcionarios" element={<Container title={"Funcionarios"} endpoint={'employees'} />} />
                        <Route path="/ubicaciones" element={<Container title={"Ubicaciones"} endpoint={'locations'} />} />
                        <Route path="/usuarios" element={<Container title={"Usuarios"} endpoint={'users'} />} />
                        <Route path="/proveedores" element={<Container title={"Proveedores"} endpoint={'providers'} />} />
                        <Route path="/coordinaciones" element={<Container title={"Coordinaciones Universitarias"} endpoint={'coordinations'} />} />

                        {/* Importar activos */}
                        <Route path="/carga-activos-plaqueados" element={<LoadFiles title={"Importar activos plaqueados"} endpoint={'loadFile'} />} />
                        <Route path="/carga-activos-no-plaqueados" element={<LoadFiles title={"Importar activos no plaqueados"} endpoint={'activos-no-plaqueados'} />} />
                        <Route path="/carga-reporte-activos-plaqueados" element={<LoadFiles title={"Importar reporte de activos plaqueados"} endpoint={'reporte-activos-plaqueados'} />} />
                        <Route path="/carga-reporte-activos-no-plaqueados" element={<LoadFiles title={"Importar reporte de activos no plaqueados"} endpoint={'reporte-activos-no-plaqueados'} />} />

                    </Routes>
                    {/* Fin rutas de la aplicación */}

                </div>
                {/* Termina el contenido principal */}
            </div>
        </div>
    );
};

export default App;