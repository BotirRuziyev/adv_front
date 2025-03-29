import PropTypes from "prop-types";
import "./css/button.css"
const Button = ({ title, imgSrc }) => {
    return (
        <button className='button-gradient'>
            {imgSrc && <img src={imgSrc} alt={title} className="button-icon" />}
            <span>{title}</span>
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
};

export default Button