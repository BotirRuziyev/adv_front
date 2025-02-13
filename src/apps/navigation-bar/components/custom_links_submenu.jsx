import React from 'react';


function CustomLinkSubMenu({ href, children }) {
    const path = window.location.pathname;
    const isActive = path === href;
    
    return (
        <li className="smb-2">
            <a href={href} className={isActive ? "active-menu-link" : "menu-link"}>
                {children}
            </a>
        </li>
    );
}

export default CustomLinkSubMenu;
