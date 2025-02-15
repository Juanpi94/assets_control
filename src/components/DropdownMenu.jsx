import React, { useState, useRef } from 'react';

const DropdownMenu = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="w-full flex items-center justify-between p-1.5 px-4 text-white hover:bg-gray-700 rounded transition duration-200">
                <span>{title}</span>
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                    </path>
                </svg>
            </button>

            {isOpen && (
                <div className="pl-4 mt-2 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;