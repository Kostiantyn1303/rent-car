import styled from "@emotion/styled";
export const ModalItems = styled.li`
  color: black;
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: transparent;

  border: none;

  &:hover {
    color: #0056b3;
    transform: "scale(1.2)";
  }
`;

export const ImgWrap = styled("div")({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "248px",
  borderRadius: "14px",
  marginBottom: "20px",
  background:
    "linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const CarTitle = styled("p")({
  color: "#121417",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "8px",

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "& span": {
    color: "#3470FF",
  },
});

export const CarPrice = styled("p")({
  color: "#121417",

  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
});

export const TagsWrap = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  marginBottom: "14px",
});

export const TagsText = styled("p")({
  color: "rgba(18, 20, 23, 0.50)",

  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: 1.5,
});

export const Line = styled("span")({
  display: "inline-block",
  backgroundColor: "rgba(18, 20, 23, 0.50)",

  width: "1px",
  height: "16px",
  marginLeft: "6px",
  marginRight: "6px",
  marginBottom: "-4px",
});

export const CarDescription = styled("p")({
  color: "#121417",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  marginBottom: "24px",
});

export const SubTitle = styled("p")({
  color: "#121417",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "8px",
});

export const AccessoriesText = styled("p")({
  color: "rgba(18, 20, 23, 0.50)",

  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",
  marginBottom: "24px",
});

export const ConditionsList = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "8px",
  marginBottom: "31px",
});

export const ConditionItem = styled("li")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F9F9F9",
  padding: "7px 14px",
  borderRadius: "35px",
});

export const ConditionText = styled("p")({
  color: "#363535",
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",

  "& span": {
    color: "#3470FF",
    fontWeight: 600,
  },
});

export const PhoneNumberLink = styled("a")({
  display: "inline-flex",
  padding: "12px 50px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  backgroundColor: "#3470FF",
  color: "#FFF",

  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "#0056b3",
  },
});
