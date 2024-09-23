import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sx?: SxProps<Theme>
}

export default function DesktopContainer({ children, sx }: Props) {
  return (
    <Box
      sx={{
        ...sx,
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
      }}
    >
      {children}
    </Box>
  );
}
