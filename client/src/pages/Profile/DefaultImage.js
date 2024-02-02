import React from "react";

import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";

const DefaultImage = () => {
  return (
    <div className="w-full h-auto min-h-[400px] bg-bgColor rounded-lg flex items-center justify-center flex-col gap-5 relative col-span-4 row-span-4">
      <LinkedCameraIcon sx={{ fontSize: "80px" }} className=" text-textGrey" />
      <h2 className="text-3xl font-bold text-center text-textGrey">
        Unfortunately , no real photo
      </h2>
      <div className="absolute bottom-[10px]">
        <h3
          className="text-2xl italic font-bold text-textGrey"
          sx={{ color: "#404961", fontSize: "25px", fontWeight: "700" }}
        >
          Memorygram
        </h3>
      </div>
    </div>
  );
};

export default DefaultImage;
