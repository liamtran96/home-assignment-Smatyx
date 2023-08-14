import React, { useState } from "react";
import { Link } from "react-router-dom";
import Textinput from "../ui/Textinput";
import { useForm } from "react-hook-form";
import Checkbox from "../ui/Checkbox";

const LoginForm = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  return (
    <form className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        type="email"
        register={register}
        error={errors.email}
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        register={register}
        error={errors.password}
      />
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      <button className="btn btn-dark block w-full text-center">Sign in</button>
    </form>
  );
};

export default LoginForm;
