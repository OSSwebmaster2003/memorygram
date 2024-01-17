import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  Avatar,
  Button,
} from "@mui/material";
import {
  appBar,
  heading,
  image,
  brandContainer,
  toolbar,
  profile,
  userName,
  logout,
} from "./styles";

import memoriesImg from "../../images/memories.png";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logoutUser();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar sx={appBar} position="static" color="inherit">
      <Box sx={brandContainer}>
        <Typography
          component={Link}
          to="/"
          sx={heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <Box
          sx={image}
          component="img"
          src={memoriesImg}
          alt="memories"
          height={60}
        />
      </Box>
      <Toolbar sx={toolbar}>
        {user ? (
          <Box component="div" sx={profile}>
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography sx={userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              sx={logout}
              color="secondary"
              onClick={logoutUser}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
