import { SvgCollection } from "../svg/svg";
import "./checkbox.scss";

interface CheckboxProps {
  type: "checkbox";
  id: string;
  name: string;
  checked: boolean;
  onChecked: () => void;
}

const Checkbox = ({ type, id, name, checked, onChecked }: CheckboxProps) => {
  return (
    <label>
      <input
        className="real-checkbox"
        checked={checked}
        type={type}
        id={id}
        name={name}
        onChange={onChecked}
      />
      <span className="custom-checkbox-open">
        <SvgCollection id={checked ? "EyeOpened" : "EyeClosed"} />
      </span>
    </label>
  );
};

export default Checkbox;
