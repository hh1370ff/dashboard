import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import CommonButton from "../common/commonButton/CommonButton";
import Notification from "../common/notification/Notification";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  let page =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  page = page
    .split("")
    .map((letter, index) => (index == 0 ? letter.toUpperCase() : letter));

  const headerStyles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      backgroundColor: "#009be5",
      padding: "1rem",
    },
    topRow: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      gap: "1rem",
      color: "white",
    },
    middleRow: {
      display: "flex",
      justifyContent: "space-between",
      color: "white",
      alignItems: "center",
    },
    middleRowLeft: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },

    link: {
      color: "white",
      fontWeight: 500,
      color: "rgba(255, 255, 255, 0.7)",
    },
    webButton: { border: "1px solid", flexGrow: 0 },
    helpIcon: {
      color: "white",
      fontSize: "3rem",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <CommonButton variant="default" sx={headerStyles.link}>
          Go to docs
        </CommonButton>
        <Typography>
          <Notification />
        </Typography>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
      </Box>
      {/* {The second line of the header} */}
      <Box sx={headerStyles.middleRow}>
        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          {page}
        </Typography>
        <Box sx={headerStyles.middleRowLeft}>
          <CommonButton variant="outline" sx={headerStyles.webButton}>
            Web setup
          </CommonButton>
          <Typography sx={headerStyles.helpIcon}>
            <Tooltip title="help">
              <IconButton>
                <HelpIcon sx={headerStyles.helpIcon} />
              </IconButton>
            </Tooltip>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
