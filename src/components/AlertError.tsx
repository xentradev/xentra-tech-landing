import { Alert, Snackbar } from "@mui/material";

interface Props {
  textError: string;
  showError: boolean;
  setShowError: (show: boolean) => void;
}

export const AlertError = ({ textError, showError, setShowError }: Props) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowError(false);
  };

  return (
    <Snackbar
      open={showError}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={6000}
      onClose={handleClose}
      sx={{ marginTop: 7 }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {textError}
      </Alert>
    </Snackbar>
  );
};
