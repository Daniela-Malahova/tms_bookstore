import { AuthErrorProps } from "../../../types/interfaces";
import Button from "../../common/button/button";
import "./authMessage.scss";

const AuthError = ({
  title,
  message,
  buttonTitle,
  buttonHandler,
}: AuthErrorProps) => {
  return (
    <div className="form">
      <h2 className="title_error">{title}</h2>
      <p className="form_text_error">{message}</p>
      <Button
        id="button-form-login"
        text={buttonTitle}
        type="submit"
        onClick={buttonHandler}
      />
    </div>
  );
};

export default AuthError;
