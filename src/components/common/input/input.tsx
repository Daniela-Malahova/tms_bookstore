import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from "react";
import classNames from "classnames";

import "./input.scss";

interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  autocomplete?: string;
  id?: string;
  text?: string;
  type?: string;
  value?: string;
  onChange?: (e: any) => void;
  error?: string;
}

const Input = forwardRef(
  (
    {
      className,
      id,
      autocomplete,
      text,
      type,
      value,
      onChange,
      error,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className="input_wrapper">
        <input
          className={classNames(className, `input_${type}`, {
            Input__error: error,
          })}
          autoComplete={autocomplete}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
        <span className={value ? "active_label" : `label_${type}`}>{text}</span>
      </div>
    );
  }
);

export default Input;
