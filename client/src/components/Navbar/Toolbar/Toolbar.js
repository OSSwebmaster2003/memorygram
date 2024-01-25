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
    <Box component="div" sx={toolbar}>
      {user ? (
        <Box component="div" sx={profile}>
          <Avatar component={Link} to="/posts/create" sx={createButton}>
            <AddIcon />
          </Avatar>
          <Avatar
            component={Link}
            to="/posts/notifications"
            sx={notificationsButton}
          >
            <NotificationsActiveIcon />
          </Avatar>
          <Dropdown user={user} logout={logout} />
        </Box>
      ) : (
        <Button
          sx={signInButton}
          component={Link}
          to="/auth"
          variant="contained"
        >
          Sign In
        </Button>
      )}
    </Box>
  );
};

export default Toolbar;
