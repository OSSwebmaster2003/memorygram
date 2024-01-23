import React from "react";
import { Avatar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import {
  avatar,
  createButton,
  notificationsButton,
  profile,
  signInButton,
  toolbar,
} from "../styles";

const Toolbar = ({ user }) => {
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
          <Avatar
            alt={user?.result.name}
            src={user?.result.imageUrl}
            width="40px"
            height="40px"
            sx={avatar}
          >
            {user?.result.name.charAt(0)}
          </Avatar>
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
