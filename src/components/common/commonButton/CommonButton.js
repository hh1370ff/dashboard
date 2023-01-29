import React from "react";
import { Button } from "@mui/material/";
const CommonButton = ({ children, color, disabled, variant, sx, onClick }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      sx={sx}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
