import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Box, Toolbar, Avatar, Button } from "@mui/material";
import {
  appBar,
  image,
  brandContainer,
  toolbar,
  profile,
  signInButton,
  avatar,
  createButton,
} from "./styles";

import AddIcon from "@mui/icons-material/Add";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";

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

    //eslint-disable-next-line
  }, [location]);

  return (
    <Box component="nav" sx={appBar} position="static" color="inherit">
      <Link to="/" sx={brandContainer}>
        <Box component="img" src={memoriesText} alt="icon" height="45px" />
        <Box
          sx={image}
          component="img"
          src={memoriesLogo}
          alt="logo"
          height="40px"
        />
      </Link>
      <Toolbar sx={toolbar}>
        {user ? (
          <Box component="div" sx={profile}>
            <Avatar component={Link} to="/posts/create" sx={createButton}>
              <AddIcon />
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
      </Toolbar>
    </Box>
  );
};

export default Navbar;
