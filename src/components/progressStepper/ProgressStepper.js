import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { LinearProgress, Typography } from "@mui/material";
import CommonButton from "../common/commonButton/CommonButton";
import { Box } from "@mui/system";

const steps = ["step1", "step2", "step3"];
const stepsDescriptions = ["description1", "description2", "description3"];

const ProgressStepper = ({ submitSuccess, submitError, setLoading }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [counter, setCounter] = useState();
  const isCompleted = activeStep > 2;

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleSubmit = () => {
    try {
      if (Math.random() < 0.5) {
        throw new Error();
      }
      setLoading(true);
      setTimeout(() => {
        submitSuccess();
        setLoading(false);
        handelRest();
      }, 2000);
    } catch (err) {
      submitError();
      handelRest();
    }
  };
  const handelRest = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography sx={{ ml: ".75rem" }}>
        {!isCompleted
          ? stepsDescriptions[activeStep]
          : "All steps are completed"}
      </Typography>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "2rem" }}
      >
        <CommonButton
          variant="contained"
          onClick={handleBack}
          disabled={activeStep <= 0}
          sx={{ display: isCompleted ? "none" : "inline-block" }}
        >
          Back
        </CommonButton>
        <CommonButton
          variant="contained"
          onClick={handelRest}
          sx={{ display: !isCompleted ? "none" : "inline-block" }}
        >
          Reset
        </CommonButton>
        <CommonButton
          variant="contained"
          onClick={handleSubmit}
          sx={{ display: !isCompleted ? "none" : "inline-block" }}
        >
          Submit
        </CommonButton>
        <CommonButton
          variant="contained"
          onClick={handleNext}
          sx={{ display: isCompleted ? "none" : "inline-block" }}
        >
          Next
        </CommonButton>
      </Box>
    </Box>
  );
};

export default ProgressStepper;
