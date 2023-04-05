import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MaskedInput from "react-text-mask";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { signIn } from "../../../../../redux/slices/userSlice";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import {
  SignInThirdStepData,
  UserDataProps,
} from "../../../../../types/interfaces";
import {
  checkPhone,
  checkStringToLatinAndNum,
} from "../../../../../constants/regExp";

import "../signupForm.scss";

const ThirdStep = ({ formData, setFormData }: UserDataProps) => {
  const [login, setLogin] = useState<string>("");
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<SignInThirdStepData>({ mode: "onChange" });

  const formSubmitHandler = ({ phoneNumber, login }: SignInThirdStepData) => {
    setFormData({ ...formData, phoneNumber, login });
    const registerData = {
      email: formData.email,
      password: formData.password,
      userName: formData.userName,
      lastName: formData.lastName,
      phoneNumber,
      login,
    };
    dispatch(signIn(registerData));
    reset();
  };

  const checkPhonePrefix = (value: string) => {
    let prefix = "XX";
    if (value) {
      prefix = value.slice(6, 8);
      if (
        prefix === "25" ||
        prefix === "29" ||
        prefix === "33" ||
        prefix === "44"
      ) {
        return prefix;
      }
      prefix = "XX";
    }
    return prefix;
  };

  const checkPhoneError = () => {
    if (errors.phoneNumber?.type === "prefixError") {
      return <p className="error_message">Проверьте код оператора</p>;
    } else if (errors.phoneNumber?.type === "phoneError") {
      return <p className="error_message">Введите корректный номер</p>;
    }
    return (
      <p className="form_text_validation">В формате +375 (xx) xxx-xx-xx</p>
    );
  };

  return (
    <>
      <p className="form_step">3 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <div className="input_wrapper">
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: true,
                validate: {
                  prefixError: (v) => checkPhonePrefix(v) !== "XX",
                  phoneError: (v) => !v.includes("x"),
                },
              }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <MaskedInput
                  name={name}
                  mask={checkPhone}
                  value={value}
                  placeholder="Телефон"
                  placeholderChar="x"
                  guide={true}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          </div>

          {checkPhoneError()}

          <Input
            autocomplete="off"
            type="text"
            text="Придумайте логин"
            id="login"
            value={login}
            {...register("login", {
              pattern: checkStringToLatinAndNum,
              required: true,
            })}
            onChange={(e) => setLogin(e.target.value)}
          />
          <p
            className={errors.login ? "error_message" : "form_text_validation"}
          >
            Используйте для логина латинский алфавит и цифры
          </p>

          <Button
            id="button-form-login"
            text="зарегистрироваться"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default ThirdStep;
