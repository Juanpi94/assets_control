import React, { useState, useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside'; // Reutilizamos el hook para cerrar al hacer clic fuera

const ProfileMenu = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef(null);

    // Cerrar el menú del perfil si se hace clic fuera de él
    useClickOutside(profileMenuRef, () => {
        setIsProfileMenuOpen(false);
    });

    const handleProfileMenuToggle = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleLogout = () => {
        // Lógica para cerrar sesión
        console.log('Logout');
    };

    return (
        <div className="relative" ref={profileMenuRef}>
            <button onClick={handleProfileMenuToggle} className="text-white focus:outline-none">
                {/* Icono de perfil */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path>
                </svg>
            </button>

            {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        Perfil
                    </button>
                    <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        Logout
                    </button>

                </div>
            )}
        </div>
    );
};

export default ProfileMenu;