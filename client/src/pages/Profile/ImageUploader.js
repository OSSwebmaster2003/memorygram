import React, { useRef } from "react";
import uploadImage from "../../images/upload.png";

const ImageUploader = () => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div onClick={handleImageClick} className="cursor-pointer">
        <img src={uploadImage} alt="upload" />
        <input type="file" ref={inputRef} className="hidden" />
      </div>
    </>
  );
};

export default ImageUploader;
