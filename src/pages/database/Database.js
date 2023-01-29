import React, { useState } from "react";
import BasicCard from "../../components/common/basicCard/BasicCard";
import ProgressStepper from "../../components/progressStepper/ProgressStepper";
import BasicSankBar from "../../components/common/basicSnackBar/BasicSnackBar";
import { LinearProgress } from "@mui/material";

const Database = () => {
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState();
  const [openError, setOpenError] = useState();
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const submitSuccess = () => {
    setOpenSuccess(true);
  };
  const handleErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const submitError = () => {
    setOpenError(true);
  };

  let content = (
    <div>
      <BasicCard
        content={
          <ProgressStepper
            submitSuccess={submitSuccess}
            submitError={submitError}
            setLoading={setLoading}
          />
        }
      />
      <BasicSankBar
        open={openSuccess}
        onClose={handleSuccessClose}
        severity="success"
        message="Data submitted successfully."
      />
      <BasicSankBar
        open={openError}
        onClose={handleErrorClose}
        severity="error"
        message="This error created on purpose to fake an error. Try again you have 50% chance to success."
      />
    </div>
  );

  if (loading) content = <LinearProgress color="secondary" />;

  return content;
};

export default Database;
