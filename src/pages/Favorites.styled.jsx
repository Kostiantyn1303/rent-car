import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  paddingTop: "150px",
  paddingBottom: "150px",
});

export const CarListWrap = styled("div")({
  marginLeft: "auto",
  marginRight: "auto",
  width: "1200px",
  paddingLeft: "8px",
  paddingRight: "8px",
});

export const CarList = styled("ul")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",

  alignItems: "center",
  columnGap: "29px",
  rowGap: "50px ",
});

export const LoadMoreButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "79px",
  height: "24px",
  marginLeft: "auto",
  marginRight: "auto",

  border: "none",
  backgroundColor: "transparent",
  color: "#3470FF",
  fontFamily: "Manrope",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  textDecorationLine: "underline",
  cursor: "pointer",

  "&:hover": {
    color: "#0B44CD;",
  },
});
