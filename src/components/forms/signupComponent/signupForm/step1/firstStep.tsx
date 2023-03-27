import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import Checkbox from "../../../../common/checkbox/checkbox";
import { UserDataProps } from "../signupForm";
import { checkStringToLatinAndNum } from "../../../../../constants/regExp";

import "../signupForm.scss";

interface FirstStepData {
  login: string;
  password: string;
}

const FirstStep = ({ formData, setFormData }: UserDataProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FirstStepData>({ mode: "onChange" });

  const formSubmitHandler = ({ login, password }: FirstStepData) => {
    setFormData({ ...formData, login, password });
  };

  const onChecked = () => {
    setCheckboxChecked((checkboxChecked) => !checkboxChecked);
  };


  return (
    <>
      <p className="form_step">1 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            autocomplete="off"
            type="text"
            text="Придумайте логин для входа"
            id="login"
            {...register("login", {
              pattern: checkStringToLatinAndNum,
              required: true,
            })}
          />
          <p
            className={errors.login ? "error_message" : "form_text_validation"}
          >
            Используйте для логина латинский алфавит и цифры
          </p>
          <Input
            autocomplete="off"
            type={checkboxChecked ? "text" : "password"}
            text="Пароль"
            id="password"
            {...register("password", {
              pattern: checkStringToLatinAndNum,
              required: true,
              minLength: 8,
            })}
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
