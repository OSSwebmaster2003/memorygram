const authWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  height: "calc(100vh - 120px)",
};
const authImage = {
  width: "200px",
};
const heading = {
  color: "#FFF",
  fontSize: "32px",
  lineHeight: "125%",
  fontWeight: "500",
  marginBottom: "32px",
};
const authForm = {
  width: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "24px",
};
const inputWrapper = {
  width: "100%",
};
const inputField = {
  width: "100%",
  padding: "16px",
  border: "1px solid #3d4554",
  borderRadius: "24px",
  background: "inherit",
  color: "#FFF",
};
const submitButton = {
  width: "100%",
  background: "#F4C038",
  borderRadius: "48px",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    background: "#F4C038",
  },
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "22px",
};
const switchButton = {
  color: "#FFF",
  fontSize: "12px",
  "&:hover": {
    color: "#F4C038",
  },
};
export {
  authWrapper,
  authImage,
  heading,
  authForm,
  inputWrapper,
  inputField,
  submitButton,
  switchButton,
};
