import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import logoImage from "../../images/memories-Logo.png";

import Input from "./Input";
import { signup, signin } from "../../actions/auth";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import {
  authImage,
  authWrapper,
  heading,
  authForm,
  inputWrapper,
  submitButton,
  switchButton,
} from "./styles";

import { AUTH } from "../../constants/actionTypes";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(form, navigate));
    } else {
      dispatch(signin(form, navigate));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const switchMode = () => {
    setIsSignUp((prev) => !prev);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const token = res?.credential;
    const decoded = jwtDecode(token);
    const result = decoded;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component="main" sx={authWrapper}>
      <Box>
        <Box component="img" src={logoImage} sx={authImage} />
      </Box>
      <Box>
        <Typography variant="h5" sx={heading}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={authForm}
          autoComplete="off"
        >
          {isSignUp && (
            <Box component="div" sx={inputWrapper}>
              <Input
                name="firstName"
                label="First Name"
                placeholder="First Name"
                handleChange={handleChange}
                autoFocus
              />
              <Input
                sx={{ marginTop: "24px" }}
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                handleChange={handleChange}
              />
            </Box>
          )}
          <Input
            sx={inputWrapper}
            name="email"
            label="Emal Address"
            placeholder="Email Address"
            handleChange={handleChange}
            type="email"
          />
          <Input
            name="password"
            label="Password"
            placeholder="Password"
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          {isSignUp && (
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          )}
          <Button type="submit" fullWidth variant="contained" sx={submitButton}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Box
            sx={{
              marginBottom: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button sx={switchButton} onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
