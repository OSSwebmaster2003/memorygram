import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

import Input from "./Input";
import { signup, signin } from "../../actions/auth";

import { avatar, heading } from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

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

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center p-5 mt-8 rounded-md w-[500px] bg-mainColor justify-center">
        <div
          className="flex items-center justify-center w-12 h-12 m-1 text-lg font-bold rounded-full bg-textGreen text-textColor"
          sx={avatar}
        >
          <LockClockOutlinedIcon />
        </div>
        <h5 className="mt-1 mb-4 text-2xl text-textColor" sx={heading}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h5>
        <form onSubmit={handleSubmit} autoComplete="off" className="w-full">
          <Grid spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="username"
                  label="Username"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              autoFocus={!isSignUp}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <button
            type="submit"
            className="w-full py-3 mt-3 mb-5 text-base font-semibold rounded-md bg-buttonColor text-textColor"
          >
            {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <button
                className="text-sm text-placeholderColor"
                onClick={switchMode}
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </main>
  );
};

export default Auth;
