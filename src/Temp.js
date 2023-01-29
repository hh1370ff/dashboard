import React from "react";

import { useForm } from "react-hook-form";
const Temp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          maxLength: {
            value: 5,
            message: "maxLength is 5",
          },
        })} // custom message
      />
      <span>{errors.firstName?.message}</span>
      <input type="submit" />
    </form>
  );

  return <div>Temp</div>;
};

export default Temp;
