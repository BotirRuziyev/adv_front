import React, { useState } from "react";

export default function Toggle() {
    const [checked, setChecked] = useState(false);

    // Обработчик изменения состояния чекбокса
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <div className="user-toggle">
                <p
                    className={`user-type ${!checked ? "toggled" : ""}`} // Добавляем класс, если выбран "Исполнитель"
                    id="executer"
                >
                    Исполнитель
                </p>
                <input
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
                <p
                    className={`user-type ${checked ? "toggled" : ""}`} // Добавляем класс, если выбран "Заказчик"
                    id="customer"
                >
                    Заказчик
                </p>
            </div>
        </>
    );
}
