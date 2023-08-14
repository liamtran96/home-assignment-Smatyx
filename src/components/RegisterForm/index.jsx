import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "../ui/Checkbox";
import Textinput from "../ui/Textinput";

const RegForm = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
      <Textinput
        name="name"
        label="name"
        type="text"
        placeholder=" Enter your name"
        register={register}
        error={errors.name}
      />{" "}
      <Textinput
        name="email"
        label="email"
        type="email"
        placeholder=" Enter your email"
        register={register}
        error={errors.email}
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        placeholder=" Enter your password"
        register={register}
        error={errors.password}
      />
      <Checkbox
        label="You accept our Terms and Conditions and Privacy Policy"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <button className="btn btn-dark block w-full text-center">
        Create an account
      </button>
    </form>
  );
};

export default RegForm;
