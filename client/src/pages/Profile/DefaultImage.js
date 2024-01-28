import { Box, Typography } from "@mui/material";
import React from "react";
import { cameraIcon, defaultImageWrapper } from "./styles";

import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";

const DefaultImage = () => {
  return (
    <Box sx={defaultImageWrapper} elevation={6}>
      <LinkedCameraIcon sx={cameraIcon} />
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#404961",
          textAlign: "center",
        }}
      >
        Unfortunately , no real photo
      </Typography>
      <Box sx={{ position: "absolute", bottom: "10px" }}>
        <Typography
          sx={{ color: "#404961", fontSize: "25px", fontWeight: "700" }}
        >
          Memorygram
        </Typography>
      </Box>
    </Box>
  );
};

export default DefaultImage;
