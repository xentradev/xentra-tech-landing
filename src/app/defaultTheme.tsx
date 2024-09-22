"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4A90E2", // Light blue for primary brand color
    },
    secondary: {
      main: "#50E3C2", // Light teal for accents and secondary actions
    },
    background: {
      default: "#F5F7FA", // Light gray background for a clean, spacious feel
      paper: "#FFFFFF", // White paper background
    },
    text: {
      primary: "#333333", // Dark gray for main text
      secondary: "#7D7D7D", // Lighter gray for secondary text
      disabled: "#B0BEC5", // Light gray for disabled text
    },
    error: {
      main: "#D32F2F", // Standard red for errors
    },
    warning: {
      main: "#FFA000", // Amber for warnings
    },
    success: {
      main: "#388E3C", // Green for success messages
    },
  },
  components: {
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
          backgroundColor: "#4A90E2",
          ":hover": {
            backgroundColor: "#357ABD", // Darker shade on hover
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        clickableColorPrimary: {
          ":hover": {
            backgroundColor: "#50E3C2",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Syne", "sans-serif"].join(","),
    allVariants: {
      color: "#333333", // Ensure all text is dark
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;
