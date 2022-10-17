import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "10em",
  md: "35em",
};

export const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    blue: {
      100: "#EAF2FD",
      200: "#95B3ED",
      600: "#2A7AE4",
    },
    gray: {
      100: "#F5F5F5",
      200: "#A2A2A2",
      400: "#464646",
    },
  },
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Raleway, sans-serif",
        bg: mode("white", "whiteAlpha.50")(props),
      },
    }),
  },
});
