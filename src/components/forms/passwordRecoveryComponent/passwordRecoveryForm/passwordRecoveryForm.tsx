import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import AuthMessage from "../../authMessage/authMessage";
import { removeError } from "../../../../redux/slices/userSlice";
import PasswordFirst from "./step1/passwordFirst";
import PasswordSecond from "./step2/passwordSecond";
import { SvgCollection } from "../../../common/svg/svg";

import "./passwordRecoveryForm.scss";

const PasswordRecoveryForm = () => {
  const { search } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isResetEmail, isChangedPassword } = useAppSelector(
    (state) => state.user
  );

  const showContent = () => {
    if (error) {
      return (
        <AuthMessage
          title="Данные не сохранились"
          message="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз"
          buttonTitle="повторить"
          buttonHandler={() => dispatch(removeError())}
        />
      );
    } else if (isResetEmail) {
      return (
        <div className="form">
          <h2 className="title_error">Письмо выслано</h2>
          <p className="form_text_error">
            Перейдите в вашу почту, чтобы воспользоваться подсказками по
            восстановлению пароля
          </p>
        </div>
      );
    } else if (isChangedPassword) {
      return (
        <AuthMessage
          title="Новые данные сохранены"
          message="Зайдите в личный кабинет, используя свои email и новый пароль"
          buttonTitle="вход"
          buttonHandler={() => navigate("/auth", { replace: true })}
        />
      );
    } else {
      return (
        <div className="form">
          <h2>Восстановление пароля</h2>
          {search ? <PasswordSecond /> : <PasswordFirst />}
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
        </div>
      );
    }
  };
  return showContent();
};

export default PasswordRecoveryForm;
