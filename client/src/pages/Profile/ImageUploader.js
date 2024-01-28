import React, { useRef, useState } from "react";
import uploadImage from "../../images/upload.png";

const ImageUploader = () => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
        <img src={uploadImage} alt="upload" />
        <input type="file" ref={inputRef} style={{ display: "none" }} />
      </div>
    </>
  );
};

export default ImageUploader;
