const wrapper = {
  width: "100%",
  margin: "40px 0",
  padding: "15px",
  borderRadius: "15px",
  border: "2px solid white",
  background: "inherit",
  backdropFilter: "blur(8px)",
};
const media = {
  borderRadius: "20px",
  objectFit: "cover",
  width: "500px",
  height: "300px",
};
const card = {
  display: "flex",
  width: "100%",
  gap: "20px",
};
const section = {
  borderRadius: "20px",
  flex: 1,
};
const imageSection = {};
const recommendedPosts = {
  display: "flex",
};
const loadingPaper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "15px",
  height: "39vh",
};
const commentsOuterContainer = {
  display: "flex",
  justifyContent: "space-between",
};
const commentsInnerContainer = {
  width: "calc(100% - 440px)",
  height: "200px",
  overflowY: "auto",
  marginRight: "30px",
};
const commentButton = {
  width: "100%",
  padding: "7px 0",
  fontSize: "16px",
  marginTop: "15px",
  backgroundColor: "#FFB526",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#FFB526",
  },
};

export {
  wrapper,
  media,
  card,
  section,
  imageSection,
  recommendedPosts,
  loadingPaper,
  commentsOuterContainer,
  commentsInnerContainer,
  commentButton,
};
