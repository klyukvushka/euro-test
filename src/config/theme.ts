import baseStyled, { ThemedStyledInterface } from "styled-components";

const theme: { [key: string]: any } = {
  breakpoints: {
    desktopSm: "1070px",
    tabletLandscape: "992px",
    tabletPortrait: "768px",
    phone: "480px",
  },
  colors: {
    blue: "#005FA3",
    text: "#222222",
    title: "#BDBDBD",
    grey: "#EBEBEB",
    section: "#E5E5E5",
    subtitle: "#333",
  },
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
