import React, { useState } from "react";

export default function Toggle({ onRoleChange }) {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
        onRoleChange(event.target.checked ? "Заказчик" : "Исполнитель");
    };

    return (
        <div className="user-toggle">
            <p className={`user-type ${!checked ? "toggled" : ""}`} id="executer">
                Исполнитель
            </p>
            <input
                className="react-switch-checkbox"
                id="react-switch-new"
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <label className="react-switch-label" htmlFor="react-switch-new">
                <span className="react-switch-button" />
            </label>
            <p className={`user-type ${checked ? "toggled" : ""}`} id="customer">
                Заказчик
            </p>
        </div>
    );
}
