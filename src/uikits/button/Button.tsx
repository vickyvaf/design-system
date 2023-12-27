import React from "react";
import styled from "styled-components";

type ButtonProps = {
  type?: "primary" | "secondary";
  danger?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.type === "primary" && !props.danger
      ? "#3498db"
      : props.type === "secondary" && !props.danger
        ? "#FFFFFF"
        : props.danger
          ? "#FF0000"
          : "#3498db"};
  color: ${(props) => (props.type === "secondary" ? "#000000" : "#ffffff")};
  font-size: ${(props) => props.fontSize || "16px"};
  padding: ${(props) => props.padding || "10px 20px"};
  border: ${(props) =>
    props.type === "secondary" ? "1px solid #000000" : "none"};
  border-color: ${(props) =>
    props.type === "secondary" ? "#EAEAEA" : "#EAEAEA"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.type === "primary" && !props.danger
        ? "#2980b9"
        : props.type === "secondary" && !props.danger
          ? "#EAEAE0"
          : props.danger
            ? "#FF0030"
            : "#2980b9"};
  }
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
