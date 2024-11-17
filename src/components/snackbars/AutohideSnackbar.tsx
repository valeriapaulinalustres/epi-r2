import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { salmon } from "../../utils/colors";

interface Props {
  openSnackbar: { open: boolean; message: string; color: string };
  setOpenSnackbar: React.Dispatch<
    React.SetStateAction<{ open: boolean; message: string; color: string }>
  >;
}

export default function AutohideSnackbar({
  openSnackbar,
  setOpenSnackbar,
}: Props) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar({ open: false, message: "", color: "" });
  };

  return (
    <div>
      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={openSnackbar.message}
        TransitionProps={{ exit: false }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: openSnackbar.color,
            color: "white",
            border: openSnackbar.color,
          },
        }}
      />
    </div>
  );
}
