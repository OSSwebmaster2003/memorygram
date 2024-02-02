import React from "react";

const Input = ({ type, name, label, placeholder, value, handleChange }) => {
  return (
    <input
      className="w-full py-3 border-none rounded-lg outline-none px-7 bg-bgColor text-textColor placeholder:text-placeholderColor"
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
