import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const BasicMenu = ({ anchorEl, open, handleClose, menuItems }) => {
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.id} onClick={handleClose}>
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default BasicMenu;
