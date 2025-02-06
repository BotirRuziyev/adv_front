import React from 'react';


function CustomLink({ href, children, icon, activeIcon }) {
    const path = window.location.pathname;
    const isActive = path === href;

    return (
        <li className="mb-2">
            <a href={href} className={isActive ? "active-menu-link" : "menu-link"}>
                <img src={isActive ? activeIcon : icon} alt={children} />
                {children}
            </a>
        </li>
    );
}

export default CustomLink;
