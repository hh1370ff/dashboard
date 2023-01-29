import React, { useState } from "react";
import BasicSnackBars from "../../components/common/basicSnackBar/BasicSnackBar";
import UserTable from "../../components/userTable/UserTable";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const onError = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <UserTable onError={onError} />
      <BasicSnackBars
        open={open}
        onClose={handleClose}
        severity="error"
        message="Something happened wrong!"
      />
    </div>
  );
};

export default Storage;
