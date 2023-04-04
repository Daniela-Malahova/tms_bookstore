import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import Checkbox from "../../../../common/checkbox/checkbox";
import { UserDataProps } from "../signupForm";
import {
  checkEmail,
  checkStringToLatinAndNum,
} from "../../../../../constants/regExp";

import "../signupForm.scss";

interface FirstStepData {
  email: string;
  password: string;
}

const FirstStep = ({ formData, setFormData }: UserDataProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FirstStepData>({ mode: "onBlur" });

  const formSubmitHandler = ({ email, password }: FirstStepData) => {
    setFormData({ ...formData, email, password });
    reset();
  };

  const onChecked = () => {
    setCheckboxChecked((checkboxChecked) => !checkboxChecked);
  };

  const checkEmailError = errors.email ? (
    <p className="error_message">Введите корректный e-mail</p>
  ) : null;

  return (
    <>
      <p className="form_step">1 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            autocomplete="off"
            type="email"
            text="E-mail"
            id="email"
            value={email}
            {...register("email", { pattern: checkEmail, required: true })}
            onChange={(e) => setEmail(e.target.value)}
          />
          {checkEmailError}
          <Input
            autocomplete="off"
            type={checkboxChecked ? "text" : "password"}
            text="Пароль"
            id="password"
            value={password}
            {...register("password", {
              pattern: checkStringToLatinAndNum,
              required: true,
              minLength: 8,
            })}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Checkbox
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checkboxChecked}
            onChecked={onChecked}
          />
          <p
            className={
              errors.password ? "error_message" : "form_text_validation"
            }
          >
            Пароль не менее 8 символов, с заглавной буквой и цифрой
          </p>
          <Button id="button-form-login" text="следующий шаг" type="submit" />
        </form>
      </div>
    </>
  );
};

export default FirstStep;
