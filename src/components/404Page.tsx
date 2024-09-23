import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LogoDarkMode from "../../public/img/icon/LogoDarkMode.svg";
import PageNotFoundPng from "../../public/img/icon/404.png";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
      }}
    >
      <Image
        src={LogoDarkMode}
        alt="Xcrush logo"
        style={{ marginTop: 15, marginBottom: 15 }}
      />

      <Image src={PageNotFoundPng} alt="Page not found image" width={400} />

      <Typography sx={{ fontSize: 26, fontWeight: "bold", mt: 2 }}>
        Oops! Page Not Found
      </Typography>

      <Typography sx={{ my: 1, textAlign: "center", opacity: 0.6 }}>
        {`This page doesn't exist. Go to our Home Page to continue exploring our site.`}
      </Typography>

      <a href="/">
        <Button variant="contained">Go to Home Page</Button>
      </a>
    </Box>
  );
};
