import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../../common/button/button";
import Input from "../../../common/input/input";
import Checkbox from "../../../common/checkbox/checkbox";
import { SvgCollection } from "../../../common/svg/svg";
import { checkStringToLatinAndNum } from "../../../../constants/regExp";

import "./loginForm.scss";

interface LoginFormData {
  login: string;
  password: string;
}

const LoginForm = () => {
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({ mode: "onChange" });

  const formSubmitHandler = (data: LoginFormData) => {
    console.log(data);
  };

  const onChecked = () => {
    setCheckboxChecked((checkboxChecked) => !checkboxChecked);
  };

  return (
    <div className="form">
      <h2>Вход в личный кабинет</h2>

      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            autocomplete="off"
            type="text"
            text="Логин"
            id="login"
            {...register("login", {
              pattern: checkStringToLatinAndNum,
              required: true,
            })}
          />
          {errors.login && (
            <p className="error_message">Пожалуйста, проверьте логин</p>
          )}
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
          {errors.password && (
            <p className="error_message">Пожалуйста, проверьте пароль</p>
          )}
          <Checkbox
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checkboxChecked}
            onChecked={onChecked}
          />
          <NavLink to="/password" className="form_text_password">
            Забыли логин или пароль?
          </NavLink>
          <Button id="button-form-login" text="вход" type="submit" />
          <p className="form_text">
            Нет учётной записи?
            <NavLink to="/signup">
              <span className="login-svg__arrow">
                регистрация
                <SvgCollection id="Arrow" />
              </span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
