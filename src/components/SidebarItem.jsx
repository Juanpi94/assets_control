const SidebarItem = ({ title, href = "#" }) => (
    <a href={href} className="block p-1.5 px-3 rounded transition duration-200 hover:bg-gray-700">
        {title}
    </a>
);

export default SidebarItem;
