const paper = {
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px",
  borderRadius: "10px",
  border: "2px solid white",
  background: "transparent",
  backdropFilter: "blur(8px)",
};
const root = {
  "& .MuiTextField-root": {
    margin: "4px",
  },
};
const heading = {
  marginBottom: "15px",
};
const switchMode = {
  color: "#333",
  fontSize: "12px",
  fontWeight: "700",
};
const avatar = {
  margin: "4px",
  backgroundColor: "purple",
};
const form = {
  width: "100%", // Fix IE 11 issue.
  marginTop: "12px",
};
const submit = {
  margin: "16px 0",
  width: "100%",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFB526",
  "&:hover": {
    backgroundColor: "#FFB526",
  },
  fontSize: "16px",
  fontWeight: "600",
};
const googleButton = {
  marginBottom: "8px",
};

export { paper, root, avatar, form, submit, googleButton, heading, switchMode };
