import { ButtonProps } from "../../../types/interfaces";
import "./button.scss";

const Button = ({ id, disabled, text, type, onClick }: ButtonProps) => {
  return (
    <button
      className={`form_button`}
      id={id}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
