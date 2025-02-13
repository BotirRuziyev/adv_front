import React, { useState, useEffect, useRef } from "react";
import CustomLink from "./custom_link";

function CustomMenuSection({ sectionTitle, links, openSection, toggleSection }) {
    const submenuRef = useRef(null); // Ссылка на подменю
    const [isVisible, setIsVisible] = useState(false);

    // Когда открывается или закрывается секция
    useEffect(() => {
        setIsVisible(openSection);
    }, [openSection]);

    return (
        <div>
            <div className="menu-item" onClick={() => toggleSection(sectionTitle)}>
                <img src={`src/assets/icons/side-nav/${sectionTitle.toLowerCase()}.svg`} alt={sectionTitle} />
                {sectionTitle}
            </div>
            <ul
                ref={submenuRef}
                className={`submenu ${isVisible ? "open" : ""}`}
                style={{
                    maxHeight: isVisible ? `${submenuRef.current.scrollHeight}px` : "0px",
                    paddingLeft: isVisible ? "20px" : "0px",
                    transition: "max-height 0.3s ease-out, padding 0.3s ease-out",
                    overflow: "hidden",
                }}
            >
                {links.map((link) => (
                    <CustomLink key={link.href} href={link.href}>
                        {link.label}
                    </CustomLink>
                ))}
            </ul>
        </div>
    );
}

export default CustomMenuSection;
