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
  return (
    <div className="auth__inputWrapper">
      <input
        required
        className="auth__inputWrapper__input"
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        onKeyPress={onKeyPress}
        style={{ verticalAlign: "bottom" }}
      />
      <span className="auth__inputWrapper__placeholder">{placeholder}</span>
      <span className="auth__inputWrapper__message">{message}</span>
      <span className="auth__inputWrapper__line"></span>
    </div>
  );
};

export default Input;
