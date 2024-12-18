import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { FlexColumn, FlexRow, FlexRowCenter } from "../../generalStyles/styles";
import { celeste } from "../../utils/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  setOpen: any;
  title: string;
  setEdition: any;
  handleSave: any;
  children: any;
}

export default function ModalLayout({
  open,
  setOpen,
  title,
  setEdition,
  handleSave,
  children,
}: Props) {
  const handleClose = () => {
    setOpen(false);
    setEdition(false);
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FlexColumn>
            <FlexRow>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </FlexRow>
            <FlexColumn>{children}</FlexColumn>
              <Button
                onClick={() => handleSave()}
                variant="contained"
                style={{ margin: "10px", backgroundColor: celeste }}
              >
                Guardar
              </Button>
          </FlexColumn>
        </Box>
      </Modal>
    </Box>
  );
}
