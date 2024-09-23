import { ReactNode } from "react";
import { Modal, Grid, RegularBreakpoints } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
};

interface Props extends RegularBreakpoints {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const CustomModal = ({ handleClose, open, children, ...props }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        sx={{ ...style }}
        {...props}
      >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default CustomModal;
