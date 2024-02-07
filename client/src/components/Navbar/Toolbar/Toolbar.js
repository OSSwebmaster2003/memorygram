import React from "react";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import Dropdown from "../Dropdown/Dropdown";

const Toolbar = ({ user, logout }) => {
  const iconWrapper =
    "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-buttonColor text-textColor";

  return (
    <div className="flex items-center justify-end gap-4 p-0">
      {user ? (
        <div className="flex items-center justify-between gap-5">
          <Link to="/posts/create" className={iconWrapper}>
            <AddIcon />
          </Link>
          <Link to="/posts/notifications" className={iconWrapper}>
            <NotificationsActiveIcon />
          </Link>
          <Dropdown user={user} logout={logout} />
        </div>
      ) : (
        <Link
          to="/auth"
          className="flex items-center justify-center h-10 px-4 text-base font-semibold rounded-md bg-buttonColor text-textColor"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Toolbar;
