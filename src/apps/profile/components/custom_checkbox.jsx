import React, { useState } from "react";
import "../styles/custom_checkbox.css";

function CustomCheckbox({ label, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);  // Передаем значение родительскому компоненту
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden-checkbox"
      />
      <span className={`checkbox ${isChecked ? "checked" : ""}`}></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}

export default CustomCheckbox;
