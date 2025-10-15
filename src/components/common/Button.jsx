import React from 'react';
import './Button.css'; // Make sure your CSS file is imported

const Button = ({ text = "Click Me", onClick, disabled = false }) => {
  // ✅ Correctly combines Bootstrap's base class with your custom class.
  // Do NOT add other classes like 'btn-light' or 'btn-secondary'.
  const buttonClasses = `btn minecraft-btn border-dark border-3 px-4 py-2`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;