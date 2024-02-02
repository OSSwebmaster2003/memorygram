import React from "react";
import { useNavigate } from "react-router-dom";

import Logout from "@mui/icons-material/Logout";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import { avatar, paperProps } from "../styles";

const Dropdown = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const username = user?.result?.username;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{ padding: 0, margin: 0 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt={user?.result?.name}
          src={user?.result?.imageUrl}
          width="40px"
          height="40px"
          sx={avatar}
        >
          {user?.result?.name.charAt(0)}
        </Avatar>
      </Box>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            navigate(`/${username}`);
            handleClose();
          }}
        >
          <Avatar /> Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/my-memories");
            handleClose();
          }}
        >
          <ListItemIcon>
            <InsertPhotoIcon size="small" />
          </ListItemIcon>
          My memories
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Dropdown;
