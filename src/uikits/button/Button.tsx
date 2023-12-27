import React from "react";
import styled from "styled-components";
import { theme as defautTheme } from "../../tokens";

type ButtonProps = {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props?.theme?.backgroundColors?.[props.type || "primary"] ||
    defautTheme.backgroundColors.primary};
  color: ${(props) =>
    props?.theme?.colors?.[props?.type || "primary"] ||
    defautTheme.colors.primary};
  padding: ${(props) =>
    props?.theme?.sizes?.[props?.size || "medium"] || defautTheme.sizes.medium};
  border-radius: ${(props) =>
    props?.theme?.borderRadius?.[props?.size || "medium"] ||
    defautTheme.borderRadius.medium};
  border: ${(props) =>
    props?.theme?.borderColors?.[props?.type || "primary"] ||
    defautTheme.borderColors.primary};

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props?.theme?.backgroundColorsHover?.[props?.type || "primary"] ||
      defautTheme.backgroundColorsHover.primary};
    color: ${(props) =>
      props?.theme?.colorsHover?.[props?.type || "primary"] ||
      defautTheme.colorsHover.primary};
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <>
      {props.children ? (
        <StyledButton {...props}>{props?.children}</StyledButton>
      ) : null}
    </>
  );
};
