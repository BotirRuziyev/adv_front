// src/components/errors-mes.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  if (!message || (Array.isArray(message) && message.length === 0)) {
    return null;
  }

  return (
    <div className="error-container">
      {Array.isArray(message) ? (
        message.map((msg, index) => (
          <p key={index} className="error">{msg}</p>
        ))
      ) : (
        <p className="error">{message}</p>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default ErrorMessage;
