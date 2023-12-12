import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  // header: 60px, footer: 90px
  height: "calc(100vh - 60px - 91px)",

  gap: "20px",
});
