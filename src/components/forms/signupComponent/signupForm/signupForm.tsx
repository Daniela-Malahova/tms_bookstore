import { useState } from "react";
import { NavLink } from "react-router-dom";
import FirstStep from "./step1/firstStep";
import SecondStep from "./step2/secondStep";
import ThirdStep from "./step3/thirdStep";
import { SvgCollection } from "../../../common/svg/svg";

import "./signupForm.scss";

export interface FormDataProps {
  login?: string;
  password?: string;
  userName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface UserDataProps {
  formData: FormDataProps;
  setFormData: (e: any) => void;
}

const SignupForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    userName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  console.log(formData);

  const showStep = () => {
    if (formData.lastName) {
      return <ThirdStep formData={formData} setFormData={setFormData} />;
    }
    if (formData.login) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    }
    return <FirstStep formData={formData} setFormData={setFormData} />;
  };

  return (
    <div className="form">
      <h2>Регистрация</h2>
      {showStep()}
      <p className="form_text">
        Есть учётная запись?
        <NavLink to="/auth">
          <span className="signup-svg__arrow">
            войти
            <SvgCollection id="Arrow" />
          </span>
        </NavLink>
      </p>
    </div>
  );
};

export default SignupForm;
