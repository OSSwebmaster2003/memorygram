import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import Toolbar from "./Toolbar/Toolbar";

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
    <nav className="static flex items-center justify-between px-10 py-5 mb-16 border-b border-b-placeholderColor">
      <Link to="/" className="flex items-center justify-start gap-1">
        <img src={memoriesText} alt="icon" className="h-[45px]" />
        <img
          src={memoriesLogo}
          alt="logo"
          className="ml-[10px] mt-[5px] h-[40px]"
        />
      </Link>
      <Toolbar user={user} logout={logoutUser} />
    </nav>
  );
};

export default Navbar;
