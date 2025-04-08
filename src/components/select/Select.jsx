import PropTypes from "prop-types";
import React from "react";
import "./css/select.css";

const Select = ({ label, data = [], defaultValue = "Тематика" }) => {
  return (
    <div className="form-control">
      <label htmlFor="#" className="label">
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        name="topic"
        id="topic-select"
        className="form-select"
      >
        {data.options?.map((item, index) => (
          <option key={`${item}-${index}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  data: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  }).isRequired,
  defaultValue: PropTypes.string,
};

export default React.memo(Select);
