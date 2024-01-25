const appBar = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 50px",
  backgroundColor: "inherit",
  marginBottom: "30px",
  borderBottom: "1px solid #FFF",
};
const heading = {
  color: "rgba(0,183,255, 1)",
  textDecoration: "none",
  fontSize: "2em",
  fontWeight: 300,
  cursor: "pointer",
};
const image = {
  marginLeft: "10px",
  marginTop: "5px",
};
const toolbar = {
  gap: "15px",
  display: "flex",
  justifyContent: "flex-end",
  padding: "0",
};
const profile = {
  gap: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const brandContainer = {
  display: "flex",
  alignItems: "center",
};
const signInButton = {
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFB526",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#FFB526",
  },
};
const avatar = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "2px solid orange",
};
const createButton = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "#FFB526",
  color: "#FFF",
};
const notificationsButton = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "#FFB526",
  color: "#FFF",
};
const paperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export {
  appBar,
  image,
  heading,
  brandContainer,
  toolbar,
  profile,
  signInButton,
  avatar,
  createButton,
  notificationsButton,
  paperProps,
};
