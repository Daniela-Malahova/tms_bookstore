import "./button.scss";

interface ButtonProps {
  id: string;
  disabled?: boolean;
  text: string;
  type: "submit" | "button";
  onClick?: (event: React.MouseEvent) => void;
}

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
