import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../tokens";

type ButtonProps = {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.theme.backgroundColors?.[props.type || "primary"]};
  color: ${(props) => props.theme.colors?.[props.type || "primary"]};
  padding: ${(props) => props.theme.sizes?.[props.size || "medium"]};
  border-radius: ${(props) =>
    props.theme.borderRadius?.[props.size || "medium"]};
  border: ${(props) => props.theme.borderColors?.[props.type || "primary"]};

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.theme.backgroundColorsHover?.[props.type || "primary"]};
    color: ${(props) => props.theme.colorsHover?.[props.type || "primary"]};
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton {...props}>{props.children}</StyledButton>
    </ThemeProvider>
  );
};
