import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import LogoDarkMode from "../../public/img/icon/LogoDarkMode.svg";

interface Props {
  withDrawer?: boolean;
  withGenderTab?: boolean;
  appbarHeight: number;
}
export default function CustomAppbar({ appbarHeight }: Props) {
  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
      >
        <Toolbar
          sx={{
            height: appbarHeight,
            backgroundColor: "background.default",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <a href="/">
                <Image
                  alt={"logo_app"}
                  src={LogoDarkMode}
                  height={100}
                  width={100}
                  priority
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <Typography
            >
              Future AI
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
