import React from 'react';
import DropdownMenu from './DropdownMenu';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const Sidebar = ({ isOpen }) => {
    return (
        <div
            className={`bg-gray-800 text-white w-1/6 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-200 ease-in-out z-40`}
        >
            <div className="h-full overflow-y-auto scrollbar-hide">
                <nav className="space-y-6 py-7 px-2">
                    <SidebarItem title="Inicio" />

                    <SidebarSection title="Plataforma" />
                    <DropdownMenu title="Activos">
                        <SidebarItem href="/plaqueados" title="Plaqueados" />
                        <SidebarItem href="/no-plaqueados" title="No plaqueados" />
                        <SidebarItem title="Tipos" />
                        <SidebarItem title="Subtipos" />
                        <SidebarItem title="Marcas" />
                        <SidebarItem title="Modelos" />
                        <SidebarItem title="Compras" />
                        <SidebarItem title="Redes" />
                    </DropdownMenu>
                    <DropdownMenu title="Trámites">
                        <SidebarItem title="Generar traslado" />
                        <SidebarItem title="Generar envio a taller" />
                        <SidebarItem title="Generar desechos" />
                        <SidebarItem title="Ver trámites" />
                    </DropdownMenu>
                    <DropdownMenu title="Reportes">
                        <SidebarItem title="General plaqueados" />
                        <SidebarItem title="General no plaqueados" />
                    </DropdownMenu>

                    <SidebarSection title="Administración" />
                    <DropdownMenu title="Gestión">
                        <SidebarItem title="Funcionarios" />
                        <SidebarItem title="Ubicaciones" />
                        <SidebarItem title="Usuarios" />
                        <SidebarItem title="Proveedores" />
                        <SidebarItem title="Coordinaciones Universitarias" />
                    </DropdownMenu>
                    <DropdownMenu title="Importar">
                        <SidebarItem title="Activos plaqueados" />
                        <SidebarItem title="Activos no plaqueados" />
                        <SidebarItem title="Reporte activos plaqueados" />
                        <SidebarItem title="Reporte activos no plaqueados" />
                    </DropdownMenu>
                    <DropdownMenu title="Respaldo">
                        <SidebarItem title="Respaldo activos plaqueados" />
                        <SidebarItem title="Respaldo activos no plaqueados" />
                        <SidebarItem title="Respaldo general" />
                    </DropdownMenu>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
