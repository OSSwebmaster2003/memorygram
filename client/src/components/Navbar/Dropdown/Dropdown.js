import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logout from "@mui/icons-material/Logout";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { Divider } from "@mui/material";

const Dropdown = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const username = user?.result?.username;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  const menuList =
    "flex items-center gap-3 px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="p-0 m-0" onClick={toggleDropdown}>
        {!user?.result?.profilePhoto ? (
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xl rounded-full cursor-pointer text-textColor bg-textGreen"
          >
            {user?.result?.name.charAt(0)}
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xl rounded-full cursor-pointer"
          >
            <img
              src={user?.result?.profilePhoto}
              className="object-cover w-full h-full rounded-full"
              alt=""
            />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none min-w-[180px]">
          <div className="py-1">
            <div
              className={menuList}
              onClick={() => {
                navigate(`/${username}`);
                setIsOpen(false);
              }}
            >
              <ManageAccountsIcon size="small" />
              Profile
            </div>
            <div
              className={menuList}
              onClick={() => {
                navigate("/my-memories");
                setIsOpen(false);
              }}
            >
              <InsertPhotoIcon size="small" />
              My memories
            </div>
            <Divider />
            <div className={menuList} onClick={logout}>
              <Logout fontSize="small" />
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
