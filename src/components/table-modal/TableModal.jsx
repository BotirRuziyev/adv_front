import PropTypes from "prop-types";
import Button from "../button/button";
import "./css/index.css";

const TableModal = ({ isOpen, title, description, onClose }) => {
  return (
    <div className={"tabla-modal " + (isOpen ? "show" : "")}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6361 1.09248L0.908133 13.8204M13.6361 13.8204L0.908134 1.09248"
              stroke="white"
            />
          </svg>
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-button">
          <Button title="Да" buttonClick={onClose} />
          <button className="no-btn border-gradient" onClick={onClose}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

TableModal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func,
};

export default TableModal;
