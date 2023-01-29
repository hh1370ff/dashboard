import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CommonButton from "../commonButton/CommonButton";

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

const BasicModal = ({ open, title, subtitle, content, validate, onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".25rem" }}>
          <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2, mb: 2, textAlign: "center" }}>
            {subtitle}
          </Typography>
        </Box>

        {content}
        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <CommonButton variant="outlined" onClick={handleClose}>
            Cancel
          </CommonButton>
          <CommonButton variant="contained" onClick={validate}>
            Submit
          </CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
