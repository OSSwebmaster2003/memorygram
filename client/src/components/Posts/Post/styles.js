const media = {
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
};
const border = {
  border: "solid",
};
const fullHeightCard = {
  height: "100%",
};
const card = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
  border: "2px solid white",
  background: "transparent",
  backdropFilter: "blur(5px)",
};
const overlay2 = {
  position: "absolute",
  top: "5px",
  right: "-15px",
  color: "white",
  zIndex: "100",
};
const grid = {
  display: "flex",
};
const title = {
  padding: "0 16px",
};
const cardActions = {
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
};
const cardAction = {
  display: "block",
  textAlign: "initial",
};
const flexCenter = {
  display: "flex",
  alignItems: "center",
};
const truncatedString = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  color: "rgba(255, 255, 255, 0.60)",
};

export {
  media,
  border,
  fullHeightCard,
  card,
  overlay2,
  grid,
  title,
  cardActions,
  cardAction,
  flexCenter,
  truncatedString,
};
