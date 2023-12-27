import React from "react";

type InputProps = {
  type?: "primary" | "secondary";
};

export const Input = (props: InputProps) => {
  return <input {...props} />;
};
