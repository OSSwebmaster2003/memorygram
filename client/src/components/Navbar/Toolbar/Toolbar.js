import React from "react";
import { Avatar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import {
  createButton,
  notificationsButton,
  profile,
  signInButton,
  toolbar,
} from "../styles";

import Dropdown from "../Dropdown/Dropdown";

const Toolbar = ({ user, logout }) => {
  return (
    <div className="flex items-center justify-end gap-4 p-0">
      {user ? (
        <div className="flex items-center justify-between gap-5">
          {/* <Avatar component={Link} to="/posts/create" sx={createButton}>
            <AddIcon />
          </Avatar> */}
          <Link
            to="/posts/create"
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-textGreen text-textColor"
          >
            <AddIcon />
          </Link>
          <Link
            to="/posts/notifications"
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-textGreen text-textColor"
          >
            <NotificationsActiveIcon />
          </Link>
          <Dropdown user={user} logout={logout} />
        </div>
      ) : (
        <Link
          to="/auth"
          className="flex items-center justify-center h-10 px-4 text-base font-semibold rounded-md bg-textGreen text-textColor"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Toolbar;
