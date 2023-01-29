import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import BasicModal from "../common/basicModal/BasicModal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const NewUserModal = ({
  open,
  onClose,
  addNewUser,
  setLoading,
  onSuccess,
  onError,
}) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    userId: yup
      .string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const { register, handleSubmit, watch, formState, getValues, reset } =
    useForm({
      resolver: yupResolver(validationSchema),
      mode: "onTouched",
    });

  /* reset form info */
  useEffect(() => {
    reset();
  }, [open]);

  /* add user function. This function has 50 percent chance to add the user. */
  const addUser = () => {
    onClose();
    try {
      if (Math.random() < 0.5) {
        throw new Error();
      }
      setLoading(true);
      setTimeout(() => {
        onSuccess();
        addNewUser(getValues());
        setLoading(false);
      }, 2000);
    } catch (err) {
      onError();
    }
  };

  const { ref: phoneNumberRef, ...phoneNumberProps } = {
    ...register("phoneNumber"),
  };
  const { ref: userIdRef, ...userIdProps } = { ...register("userId") };
  const { ref: emailRef, ...emailProps } = { ...register("email") };

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        marginBottom: "2rem",
      }}
    >
      <TextField
        placeholder="Email"
        sx={{ height: "3rem" }}
        name="email"
        label="Email"
        inputRef={emailRef}
        {...emailProps}
        error={formState.errors.email ? true : false}
        helperText={formState.errors.email?.message}
      />
      <TextField
        placeholder="Phone number"
        sx={{ height: "3rem" }}
        name="phoneNumber"
        label="Phone number"
        inputRef={phoneNumberRef}
        {...phoneNumberProps}
        error={formState.errors.phoneNumber ? true : false}
        helperText={formState.errors.phoneNumber?.message}
      />

      <TextField
        placeholder="User ID"
        sx={{ height: "3rem" }}
        name="userId"
        label="User ID"
        inputRef={userIdRef}
        {...userIdProps}
        error={formState.errors.userId ? true : false}
        helperText={formState.errors.userId?.message}
      />
    </Box>
  );
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="Add New User"
      subtitle="Fill out inputs and submit the form"
      content={content}
      validate={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default NewUserModal;
