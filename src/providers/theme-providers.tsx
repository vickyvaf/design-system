import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as defaultTheme } from "../tokens";

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: {
  children: React.ReactNode;
  theme?: typeof defaultTheme;
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
