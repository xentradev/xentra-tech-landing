"use client";
import { createTheme } from "@mui/material/styles";
import { shadeColor } from "./colors";

export const createCustomTheme = ({
  backgroundColor = "#ffffff",
  primaryMainColor = "#1976d2",
  textColor = "#000000",
}: {
  backgroundColor?: string;
  primaryMainColor?: string;
  textColor?: string;
}) => {
  const light = shadeColor(primaryMainColor, 20); // 20% más claro
  const dark = shadeColor(primaryMainColor, -20); // 20% más oscuro
  const paper = shadeColor(backgroundColor, 30); // 20% más oscuro
  const theme = createTheme({
    palette: {
      primary: {
        light,
        main: primaryMainColor,
        dark,
      },
      background: {
        default: backgroundColor,
        paper
      },
      text: {
        primary: textColor,
        secondary: "white"
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            height: 0,
            maxWidth: 50,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&:first-of-type": {
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            },
            "&:last-of-type": {
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            },
            "&:before": {
              display: "none",
            },
            "&expanded": {
              border: "1px solid #4A90E2", // Primary color for expanded borders
            },
            backgroundImage: "none",
            boxShadow: "none",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#FFFFFF",
            backgroundImage:
              "linear-gradient(to bottom, #F5F7FA 0%, #FFFFFF 100%)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            textTransform: "none",
            fontWeight: 600,
            padding: "6px 15px 6px 15px",
            backgroundColor: primaryMainColor,
            ":hover": {
              backgroundColor: dark, // Darker shade on hover
            },
          },
        },
      },
    },
    typography: {
      fontFamily: ["Syne", "sans-serif"].join(","),
      allVariants: {
        color: textColor, // Ensure all text is dark
      },
    },
  });
  return theme;
};

/*export const createCustomTheme = ({
  backgroundColor = "#ffffff",
  primaryMainColor = "#1976d2",
  textColor = "#000000",
}: {
  backgroundColor?: string;
  primaryMainColor?: string;
  textColor?: string;
}) => {
  const light = shadeColor(primaryMainColor, 20); // 20% más claro
  const dark = shadeColor(primaryMainColor, -20); // 20% más oscuro
  const paper = shadeColor(backgroundColor, 30); // 20% más oscuro
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3F51B5', // Primary Color
        light: '#C5CAE9', // Light Primary Color
        dark: '#303F9F', // Dark Primary Color
        contrastText: '#FFFFFF', // Text / Icons
      },
      000000
      secondary: {
        main: '#FF9800', // Accent Color
      },
      text: {
        primary: '#212121', // Primary Text
        secondary: '#FCFCFc', // Secondary Text
      },
      divider: '#BDBDBD', // Divider Color,
      background: {
        default: "#FAFAFA",
        paper: "#FAFAFA",
      },
    },
  });
  return theme;
};*/