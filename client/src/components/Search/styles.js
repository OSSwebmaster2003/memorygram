const searchWrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "25px",
  padding: "8px 8px 8px 20px",
  borderRadius: "10px",
};
const searchButton = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "288px",
  height: "68px",
  backgroundColor: "#E12020",
  fontSize: "18px",
  fontWeight: "600",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#E12020",
  },
};
const searchInput = {
  width: "calc((100% - 106px)/2)",
  border: "none",
  outline: "none",
  boxShadow: "none",
};

export { searchWrapper, searchButton, searchInput };
