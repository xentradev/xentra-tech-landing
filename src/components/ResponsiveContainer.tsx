import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  only: "desktop" | "mobile";
  children?: ReactNode;
}

export default function ResponsiveContainer({
  only = "desktop",
  children,
}: Props) {
  let sxProps =
    only === "desktop"
      ? { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }
      : { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" };
  return (
    <Box
      sx={{
        display: sxProps,
        visibility: "hidden"
      }}
    >
      {children}
    </Box>
  );
}
