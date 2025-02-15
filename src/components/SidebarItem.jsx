
import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, href = "#"  }) => (
    <Link className='block p-1.5 px-3 rounded transition duration-200 hover:bg-gray-700' to={href}>
        {title}
    </Link>
);

export default SidebarItem;
