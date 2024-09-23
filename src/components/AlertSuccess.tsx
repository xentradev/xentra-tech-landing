"use client";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface Props {
  text: string;
  show: boolean;
  setShow?: (show: boolean) => void;
}

export const AlertSuccess = ({ text, show, setShow }: Props) => {
  const [open, setOpen] = useState(show);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (setShow) {
      setShow(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
      onClose={handleClose}
      sx={{ marginTop: 7 }}
    >
      <Alert severity="success">{text}</Alert>
    </Snackbar>
  );
};
