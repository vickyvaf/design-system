/** @type { import('@storybook/react').Preview } */
import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      logo: {
        src: "./public/logo.svg",
      },
      themes: themes.dark,
    },
  },
};

export default preview;
