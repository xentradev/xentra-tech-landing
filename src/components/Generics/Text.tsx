import { SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "title" | "subtitle" | "text" | "caption";
  fontWeight?: "bold" | "semibold" | "regular";
  color?: "normal" | "degrade" | "light" | "secondary";
  onClick?: () => void;
  sx?: SxProps<Theme>;
}
const Text = ({ variant = "text", children, sx, color, onClick }: Props) => {
  let style: SxProps<Theme> = {};
  switch (variant) {
    case "title": {
      style = {
        fontStyle: "normal",
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "130%",
        letterSpacing: "-0.02em",
      };
      break;
    }
    case "subtitle": {
      style = {
        fontStyle: "normal",
        fontSize: 24,
        fontWeight: 600,
        lineHeight: "130%",
        letterSpacing: "-0.01em",
      };
      break;
    }
    case "text": {
      style = {
        fontStyle: "normal",
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "130%",
        letterSpacing: "-0.01em",
      };
      break;
    }
    case "caption": {
      style = {
        fontStyle: "normal",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "130%",
        letterSpacing: "-0.01em",
      };
      break;
    }
  }
  switch (color) {
    case "degrade": {
      style = {
        ...style,
        background:
          "linear-gradient(51.06deg, #652AC8 0.87%, #7B78F2 37.1%, #6197EE 62.22%, #45B5E9 79.12%, #10D7E2 97.48%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
      break;
    }
    case "light": {
      style = {
        ...style,
        color: "text.disabled",
      };
      break;
    }
    case "secondary": {
      style = {
        ...style,
        color: "text.secondary",
      };
      break;
    }
    default: {
      style = {
        ...style,
        color: "text.primary",
      };
      break;
    }
  }

  if (onClick) {
    style = {
      ...style,
      cursor: "pointer",
    };
  }

  return (
    <Typography sx={{ ...style, ...sx }} onClick={onClick}>
      {children}
    </Typography>
  );
};

export default Text;
