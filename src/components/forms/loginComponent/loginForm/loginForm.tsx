import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { logIn, removeError } from "../../../../redux/slices/userSlice";
import AuthError from "../../authMessage/authMessage";
import Button from "../../../common/button/button";
import Input from "../../../common/input/input";
import Checkbox from "../../../common/checkbox/checkbox";
import { SvgCollection } from "../../../common/svg/svg";
import {
  checkEmail,
  checkStringToLatinAndNum,
} from "../../../../constants/regExp";
import { LoginCredsProps } from "../../../../types/interfaces";

import "./loginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const { isAuth, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginCredsProps>({ mode: "onBlur" });

  const formSubmitHandler = (data: LoginCredsProps) => {
    dispatch(logIn(data));
    reset();
  };

  const onChecked = () => {
    setCheckboxChecked((checkboxChecked) => !checkboxChecked);
  };

  const errorEmailMessage = errors.email && (
    <p className="error_message">Введите корректный e-mail</p>
  );

  const errorPasswordMessage = errors.password && (
    <p className="error_message">Пожалуйста, проверьте пароль</p>
  );

  const clearError = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/books/all", { replace: true });
    }
  }, [isAuth]);

  return (
    <>
      {error ? (
        <AuthError
          title="Вход не выполнен"
          message="Что-то пошло не так. Попробуйте ещё раз"
          buttonTitle="повторить"
          buttonHandler={() => clearError()}
        />
      ) : (
        <div className="form">
          <h2>Вход в личный кабинет</h2>

          <div className="form_wrapper">
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <Input
                autocomplete="off"
                type="email"
                text="Email"
                id="email"
                value={email}
                {...register("email", { pattern: checkEmail, required: true })}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errorEmailMessage}

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

              {errorPasswordMessage}

              <NavLink to="/password" className="form_text_password">
                Забыли пароль?
              </NavLink>
              <Button id="button-form-login" text="вход" type="submit" />
              <div className="arrow_link">
                <div className="form_text">Нет учётной записи?</div>
                <NavLink to="/signup">
                  <div className="login-svg__arrow">
                    <div className="arrow_text">Регистрация</div>
                    <div className="arrow_svg">
                      <SvgCollection id="Arrow" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
