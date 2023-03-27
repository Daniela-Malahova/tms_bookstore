import { NavLink } from "react-router-dom";
import PasswordFirst from "./step1/passwordFirst";
import PasswordSecond from "./step2/passwordSecond";
import { SvgCollection } from "../../../common/svg/svg";

import "./passwordRecoveryForm.scss";

const PasswordRecoveryForm = () => {
  return (
    <div className="form">
      <h2>Восстановление пароля</h2>
      <PasswordFirst />
      <PasswordSecond />
      <p className="form_text">
        Нет учётной записи?
        <NavLink to="/signup">
          <span className="password-svg__arrow">
            регистрация
            <SvgCollection id="Arrow" />
          </span>
        </NavLink>
      </p>
    </div>
  );
};

export default PasswordRecoveryForm;
