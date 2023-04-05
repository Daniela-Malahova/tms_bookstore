import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  SignInSecondStepData,
  UserDataProps,
} from "../../../../../types/interfaces";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";

import "../signupForm.scss";

const SecondStep = ({ formData, setFormData }: UserDataProps) => {
  const [userName, setUserName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInSecondStepData>({ mode: "onBlur" });

  const formSubmitHandler = ({ userName, lastName }: SignInSecondStepData) => {
    setFormData({ ...formData, userName, lastName });
    reset();
  };

  return (
    <>
      <p className="form_step">2 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            autocomplete="off"
            type="text"
            text="Имя"
            id="userName"
            value={userName}
            {...register("userName", { required: true })}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && (
            <p className="error_message">Поле не может быть пустым</p>
          )}
          <Input
            autocomplete="off"
            type="text"
            text="Фамилия"
            id="lastName"
            value={lastName}
            {...register("lastName", { required: true })}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="error_message">Поле не может быть пустым</p>
          )}
          <Button id="button-form-login" text="последний шаг" type="submit" />
        </form>
      </div>
    </>
  );
};

export default SecondStep;
