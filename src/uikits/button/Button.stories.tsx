import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../tokens/tokens";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Kits/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Button",
  },
};
