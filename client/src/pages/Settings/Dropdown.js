import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dropdown = ({ selectedOption, setSelectedOption, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option, e) => {
    e.stopPropagation();
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["Male", "Female"];

  const listItemClassName =
    "px-4 py-2 cursor-pointer hover:bg-mainColor text-textColor";

  return (
    <div className="relative w-full">
      <button
        className="flex items-center justify-between w-full py-3 border-none rounded-md outline-none px-7 bg-bgColor text-textColor placeholder:text-placeholderColor"
        onClick={toggleDropdown}
      >
        {value || "Gender"}
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      {isOpen && (
        <div className="absolute w-full p-3 mt-2 rounded-md shadow-lg bg-bgColor">
          <ul>
            {options
              .filter((option) => option !== selectedOption)
              .map((option, index) => (
                <li
                  key={index}
                  onClick={(e) => handleOptionClick(option, e)}
                  className={listItemClassName}
                >
                  {option}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
