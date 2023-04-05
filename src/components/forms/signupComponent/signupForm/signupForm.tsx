import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  removeError,
  setIsNewUserRegistred,
} from "../../../../redux/slices/userSlice";
import FirstStep from "./step1/firstStep";
import SecondStep from "./step2/secondStep";
import ThirdStep from "./step3/thirdStep";
import AuthError from "../../authMessage/authMessage";
import { SvgCollection } from "../../../common/svg/svg";

import "./signupForm.scss";

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const { error, isNewUserRegistred } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
    userName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const showStep = () => {
    if (formData.lastName) {
      return <ThirdStep formData={formData} setFormData={setFormData} />;
    }
    if (formData.email) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    }
    return <FirstStep formData={formData} setFormData={setFormData} />;
  };

  const clearError = () => {
    setFormData({
      login: "",
      password: "",
      userName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
    dispatch(removeError());
  };

  const successfullyRegisterHandler = () => {
    navigate("/auth", { replace: true });
    dispatch(setIsNewUserRegistred());
  };

  const getContent = () => {
    if (isNewUserRegistred) {
      return (
        <AuthError
          title="Регистрация успешна"
          message="Регистрация прошла успешно. Зайдите в личный кабинет, используя свои email и пароль"
          buttonTitle="вход"
          buttonHandler={() => successfullyRegisterHandler()}
        />
      );
    } else if (error) {
      return (
        <AuthError
          title="Данные не сохранились"
          message="Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail"
          buttonTitle="назад к регистрации"
          buttonHandler={() => clearError()}
        />
      );
    } else {
      return (
        <div className="form">
          <h2>Регистрация</h2>

          {showStep()}

          <div className="arrow_link">
            <div className="form_text">Есть учётная запись?</div>
            <NavLink to="/auth">
              <div className="login-svg__arrow">
                <div className="arrow_text">войти</div>
                <div className="arrow_svg">
                  <SvgCollection id="Arrow" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      );
    }
  };

  return getContent();
};

export default SignupForm;
