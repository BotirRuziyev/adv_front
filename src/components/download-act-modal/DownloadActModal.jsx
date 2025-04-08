import PropTypes from "prop-types";
import Button from "../button/button";
import MonthModal from "../monthModal";
import "./css/index.css";
const DownloadActModal = ({ isOpen, onClose }) => {
  return (
    <div className={"dawnload-act-modal " + (isOpen ? "show" : "")}>
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
        <div className="form-control">
          <h3 className="label">Период</h3>
          <MonthModal />
        </div>
        <div className="form-input__control">
          <input type="text" placeholder="За за последний месяц" disabled />
          <input type="text" placeholder="За предыдущий месяц" disabled />
        </div>
        <Button title="Выгрузить акт" />
      </div>
    </div>
  );
};
DownloadActModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default DownloadActModal;
