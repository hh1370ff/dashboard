import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";
import BasicMenu from "../basicMenu/BasicMenu";
import { useState } from "react";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(!open);
  };
  const menuItems = [
    { id: 1, label: "label1" },
    { id: 2, label: "label2" },
    { id: 3, label: "label3" },
  ];
  const handleOpen = (e) => {
    if (menuItems.length != 0) {
      setOpen(!open);
      setAnchorEl(e.currentTarget);
    }
  };

  let title = `You have ${menuItems.length} notifications.`;
  if (menuItems.length === 0) {
    title = "You don't have any new notification.";
  }

  const content = (
    <>
      <Tooltip title={title}>
        <IconButton color="primary">
          <Badge
            badgeContent={menuItems.length}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            <NotificationsIcon sx={{ color: "white" }} onClick={handleOpen} />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        menuItems={menuItems}
      />
    </>
  );
  return content;
};

export default Notification;
