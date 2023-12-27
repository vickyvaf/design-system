import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../tokens";

type InputProps = {
  type?: "text" | "password" | "email"; // Add any other input types as needed
  size?: "small" | "medium" | "large";
  placeholder?: string;
};

const StyledInput = styled.input<InputProps>`
  padding: ${(props) => props.theme.sizes?.[props.size || "medium"]};
  border-radius: ${(props) =>
    props.theme.borderRadius?.[props.size || "medium"]};
  border: ${(props) => props.theme.borderColors?.[props.type || "text"]};
  outline: none;

  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) =>
      props.theme.borderColorsHover?.[props.type || "text"]};
  }
`;

export const Input = (props: InputProps) => {
  // You can use useRef to get a reference to the input element
  const inputRef = useRef<HTMLInputElement | null>(null);

  // You can use state to manage the input value if needed
  const [value, setValue] = useState<string>("");

  // You can use other events like onChange, onBlur, etc., based on your requirements
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledInput
        ref={inputRef}
        {...props}
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder || ""}
      />
    </ThemeProvider>
  );
};
