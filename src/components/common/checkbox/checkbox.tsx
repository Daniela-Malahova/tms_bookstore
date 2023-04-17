import { CheckboxProps } from "../../../types/interfaces";
import { SvgCollection } from "../svg/svg";
import "./checkbox.scss";

const Checkbox = ({ type, id, name, checked, onChecked }: CheckboxProps) => {
  return (
    <label className="label_checkbox">
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
