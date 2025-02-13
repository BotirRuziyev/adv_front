
import React, { useState } from "react";
import "../styles/nav-bar.css";
import { Link } from "react-router-dom";
import Toggle from "../components/switch";
import CustomLink from "../components/custom_link";
import "../styles/customMenuSel_style.css"
import CustomLinkSubMenu from "../components/custom_links_submenu.jsx"
import icons from "../../../assets/icons.js"

function Menu({ selectedAvatar }) {
    const [role, setRole] = useState("Исполнитель"); // Роль пользователя
    const [openSections, setOpenSections] = useState({}); // Открытые разделы

    // Функция для переключения подменю
    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <nav className="nav-pannel">
            <div className="profile-preview">
                <Link to="/profile" className="avatar-placeholder">
                    <img src={selectedAvatar} className="avatar" alt="Аватар" />
                </Link>
                <h3 className="nickname-preview">Doe John</h3>
                <p id="user-id">(ID123)</p>
            </div>

            {/* Переключатель ролей */}
            <Toggle onRoleChange={setRole} />

            <ul>
                <CustomLink href="/main"
                    // icon="src/assets/icons/side-nav/main.svg" 
                    icon={icons.main.default}
                    // activeIcon="src/assets/icons/side-nav/main-active.svg"
                    activeIcon={icons.main.active}
                >
                    Главная
                </CustomLink>

                {role === "Исполнитель" ? (
                    <>
                        {/* <a href="/advertising/campaigns" className="menu-item" onClick={() => toggleSection("reklama")}>
                            <img src={icons.adv} alt="Реклама" />
                            Реклама
                        </a> */}
                        <div className="menu-item" onClick={() => toggleSection("reklama")}>
                            <img src={icons.adv} alt="Реклама" />
                            Реклама
                        </div>

                        {openSections["reklama"] && (
                            <ul className="submenu">
                                <CustomLinkSubMenu style="submenu_element" href="/adv/campaigns" >Кампании</CustomLinkSubMenu>
                                <CustomLinkSubMenu style="submenu_element" href="/adv/creatives" >Креативы</CustomLinkSubMenu>
                                <CustomLinkSubMenu style="submenu_element" href="/adv/advertisers" >Рекламодатели</CustomLinkSubMenu>
                            </ul>
                        )}

                        <CustomLink href="/support"
                            // icon="src/assets/icons/side-nav/support.svg"
                            icon={icons.support.default}
                            // activeIcon="src/assets/icons/side-nav/support-active.svg"
                            activeIcon={icons.support.active}>
                            Поддержка
                        </CustomLink>

                        <div className="menu-item" onClick={() => toggleSection("finance")}>
                            <img src={icons.income} alt="Финансы" />
                            Финансы
                        </div>
                        {openSections["finance"] && (
                            <ul className="submenu">
                                <CustomLink href="/finance/history-topup" img_stat={true}>История пополнения</CustomLink>
                                <CustomLink href="/finance/history-expense" img_stat={true}>История списания</CustomLink>
                            </ul>
                        )}
                    </>
                ) : (
                    <>
                        <CustomLink href="/support"
                            // icon="src/assets/icons/side-nav/support.svg"
                            icon={icons.support.default}
                            // activeIcon="src/assets/icons/side-nav/support-active.svg"
                            activeIcon={icons.support.active}
                        >
                            Поддержка
                        </CustomLink>
                    </>
                )}

                <CustomLink href="/notification"
                    // icon="src/assets/icons/side-nav/notification.svg"
                    icon={icons.notification.default}
                    // activeIcon="src/assets/icons/side-nav/notification-active.svg"
                    activeIcon={icons.notification.active}
                >
                    Уведомления
                </CustomLink>
                <CustomLink href="/profile"
                    // icon="src/assets/icons/side-nav/profile.svg"
                    icon={icons.profile.default}
                    // activeIcon="src/assets/icons/side-nav/profile-active.svg"
                    activeIcon={icons.profile.active}
                >
                    Профиль
                </CustomLink>
                <CustomLink href="/guest-access"
                    // icon="src/assets/icons/side-nav/guest-access.svg" 
                    icon={icons.guestAccess.default}
                    // activeIcon="src/assets/icons/side-nav/guest-access-active.svg"
                    activeIcon={icons.guestAccess.active}
                >
                    Гостевой доступ
                </CustomLink>
            </ul>
        </nav>
    );
}

export default Menu;