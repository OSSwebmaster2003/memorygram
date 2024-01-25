const wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "calc(100vh - 140px)",
  background: "inherit",
  border: "none",
  outline: "none",
  boxShadow: "none",
};
const form = {
  width: "500px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  background: "inherit",
  borderRadius: "15px",
  backdropFilter: "blur(5px)",
  border: "2px solid white",
};
const heading = {
  fontSize: "18px",
  color: "white",
};
const choosePicture = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  cursor: "pointer",
};
const submitBtn = {
  width: "100%",
  padding: "10px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFB526",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#FFB526",
  },
  fontWeight: 500,
  fontSize: "16px",
};
const clearBtn = {
  width: "100%",
  padding: "10px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#E12020",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#E12020",
  },
  fontWeight: 500,
  fontSize: "16px",
};

export { wrapper, form, heading, choosePicture, submitBtn, clearBtn };
