import React from "react";
import { Grid } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
  half,
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={half ? 6 : 12}>
      <label className="block mb-2 text-sm font-bold text-placeholderColor">
        {label}
      </label>
      <div className="relative w-full">
        <input
          className="w-full px-4 py-3 leading-tight border-none rounded-md outline-none appearance-none text-textColor focus:outline-none focus:shadow-outline bg-bgColor"
          autoComplete="new-password"
          name={name}
          onChange={handleChange}
          required
          autoFocus={autoFocus}
          type={type}
          placeholder={label}
        />
        <input type="text" style={{ display: "none" }} />
        {name === "password" && (
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-textColor"
          >
            {type === "password" ? <Visibility /> : <VisibilityOff />}
          </button>
        )}
      </div>
    </Grid>
  );
};

export default Input;
