import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MaskedInput from "react-text-mask";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import {
  setError,
  setIsStartLoaging,
  setIsStopLoaging,
  setUser,
} from "../../../../../redux/slices/userSlice";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import { UserDataProps } from "../signupForm";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {
  checkPhone,
  checkStringToLatinAndNum,
} from "../../../../../constants/regExp";

import "../signupForm.scss";

interface ThirdStepData {
  phoneNumber: string;
  login: string;
}

const ThirdStep = ({ formData, setFormData }: UserDataProps) => {
  const [login, setLogin] = useState<string>("");
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<ThirdStepData>({ mode: "onChange" });

  const userRegistration = () => {
    const auth = getAuth();

    if (formData.email && formData.password) {
      dispatch(setIsStartLoaging());
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(({ user }) => {
          updateProfile(user, {
            displayName: `${formData.userName} ${formData.lastName}`,
          });

          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken,
            })
          );
        })
        .catch((error) => {
          dispatch(setError());
        })
        .finally(() => {
          dispatch(setIsStopLoaging());
        });
    }
  };

  const formSubmitHandler = ({ phoneNumber, login }: ThirdStepData) => {
    setFormData({ ...formData, phoneNumber, login });
    userRegistration();
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
