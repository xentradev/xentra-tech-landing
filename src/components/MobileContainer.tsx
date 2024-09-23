import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  sx?: SxProps<Theme>
}

export default function MobileContainer({ children, sx }: Props) {
  return (
    <Box
      sx={{
        ...sx,
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      {children}
    </Box>
  );
}
