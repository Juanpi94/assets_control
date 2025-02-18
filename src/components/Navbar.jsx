import React from 'react';
import ProfileMenu from './ProfileMenu'; // Importa el componente ProfileMenu

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="bg-blue-600 p-4 fixed w-full top-0 z-50">
            <div className="flex items-center justify-between">
                <div className='flex'>
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
                        {/* Icono de menú */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7">
                            </path>
                        </svg>
                    </button>
                    <div className="ml-3">
                        <a className='text-white font-bold p-2' href="/">Control de activos</a>
                    </div>
                </div>

                {/* Componente ProfileMenu */}
                <ProfileMenu />
            </div>
        </nav>
    );
};

export default Navbar;