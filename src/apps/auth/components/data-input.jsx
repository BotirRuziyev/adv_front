// import React from 'react';

// function DataInput(props) {
//     const { text, input, type } = props;

//     return (
//         <div className="data-container">
//             <p className="label">{text}</p>
//             <input
//                 type={type}
//                 className="input"
//                 placeholder={input.placeholder}
//                 name={input.name}
//                 value={input.value}
//                 onChange={input.onChange}
//             />
//         </div>
//     );
// }

// export default DataInput;


import { useState } from 'react';
import PropTypes from 'prop-types';
import { Eye, EyeOff } from 'lucide-react';

const DataInput = ({ type, text, input }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="data-container">
      <p className="label">{text}</p>
      <div className="input-wrapper">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className="input"
          placeholder={input.placeholder}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
        />
        {type === 'password' && (
          <button
            type="button"
            className="eye-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

DataInput.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
};

export default DataInput;
