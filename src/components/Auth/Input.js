import React from "react";

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  type,
  onKeyPress,
  message,
}) => {
  console.log(message);
  return (
    <div className="auth__inputWrapper">
      <input
        required
        className="auth__inputWrapper__input"
        id={id}
        value={value}
        onChange={onChange}
        // placeholder={placeholder}
        type={type}
        onKeyPress={onKeyPress}
      />
      <span className="auth__inputWrapper__placeholder">{placeholder}</span>
      <span className="auth__inputWrapper__message">{message}</span>
      <span className="auth__inputWrapper__line"></span>
    </div>
  );
};

export default Input;
