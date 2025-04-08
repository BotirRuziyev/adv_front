import PropTypes from "prop-types";
import "./css/button.css";
const Button = ({ title, imgSrc, buttonClick }) => {
  return (
    <button className="button-gradient" onClick={buttonClick}>
      {imgSrc && <img src={imgSrc} alt={title} className="button-icon" />}
      <span>{title}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  buttonClick: PropTypes.func,
};

export default Button;
