import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  InputBase,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { inputField } from "./styles";

const Input = ({
  placeholder,
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <InputBase
      sx={
        name === "lastName"
          ? {
              marginTop: "24px",
              width: "100%",
              padding: "16px",
              border: "1px solid #3d4554",
              borderRadius: "24px",
              background: "inherit",
              color: "#FFF",
            }
          : inputField
      }
      name={name}
      onChange={handleChange}
      variant="outlined"
      color="secondary"
      placeholder={placeholder}
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
