import PropTypes from "prop-types"
import './css/input.css'

const Input = ({ label, type, value, placeholder, onChange }) => {
    return (
        <div className='form-control'>
            <label htmlFor="#" className="label">
                {label}
            </label>
            <input type={type} value={value} placeholder={placeholder} className="form-input" onChange={onChange} />
        </div>
    )
}
Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default Input