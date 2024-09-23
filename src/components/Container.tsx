import { Box } from "@mui/material";
import { ReactNode } from "react";
import CustomAppbar from "./AppBar";
import CustomDrawer from "./Drawer";

interface Props {
  children: ReactNode;
  withPreferredGenderDialog?: boolean;
  withBottomMenu?: boolean;
  withGenderTab?: boolean;
  showDrawer?: boolean;
  showAppbar?: boolean;
  overflow?: boolean;
}

export const APP_BAR_HEIGHT = 55;

export const BOTTOM_NAVIGATION_HEIGHT = 65;

const MOBILE_CONTENT_HEIGHT_WITH_BOTTOM_NAV = `calc(100svh - ${APP_BAR_HEIGHT}px - ${BOTTOM_NAVIGATION_HEIGHT}px)`;

export default function Container({
  children,
  //withPreferredGenderDialog = true,
  withBottomMenu = true,
  withGenderTab = false,
  showDrawer = true,
  showAppbar = true,
  overflow = true,
}: Props) {
  return (
    <Box
      style={{
        height: `100svh`,
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
      }}
    >
      {showAppbar && (
        <CustomAppbar
          withDrawer={showDrawer}
          withGenderTab={withGenderTab}
          appbarHeight={APP_BAR_HEIGHT}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: {
            xs: withBottomMenu ? MOBILE_CONTENT_HEIGHT_WITH_BOTTOM_NAV : "100%",
            sm: withBottomMenu ? MOBILE_CONTENT_HEIGHT_WITH_BOTTOM_NAV : "100%",
            md: withBottomMenu ? MOBILE_CONTENT_HEIGHT_WITH_BOTTOM_NAV : "100%",
            lg: "100%",
            xl: "100%",
          },
        }}
      >
        {showDrawer && <CustomDrawer />}
        <Box
          sx={{
            backgroundColor: "background.default",
            ...(overflow && { overflowY: "auto" }),
            height: "auto",
            flex: 1,
            //paddingBottom: { xs: "70px", sm: "70px", md: "70px", lg: 0, xl: 0 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
