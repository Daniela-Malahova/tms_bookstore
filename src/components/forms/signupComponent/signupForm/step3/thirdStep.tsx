import { Controller, useForm } from "react-hook-form";
import MaskedInput from "react-text-mask";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import { UserDataProps } from "../signupForm";
import { checkEmail, checkPhone } from "../../../../../constants/regExp";

import "../signupForm.scss";

interface ThirdStepData {
  phone: string;
  email: string;
}

const ThirdStep = ({ formData, setFormData }: UserDataProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<ThirdStepData>({ mode: "onChange" });

  const formSubmitHandler = ({ phone, email }: ThirdStepData) => {
    setFormData({ ...formData, phone, email });
  };

  const checkPhonePrefix = (value: string) => {
    let prefix = "XX";
    if (value) {
      prefix = value.slice(6, 8);
      if (
        prefix === "25" ||
        prefix === "29" ||
        prefix === "33" ||
        prefix === "44"
      ) {
        return prefix;
      }
      prefix = "XX";
    }
    return prefix;
  };

  const checkPhoneError = () => {
    if (errors.phone?.type === "prefixError") {
      return <p className="error_message">Проверьте код оператора</p>;
    } else if (errors.phone?.type === "phoneError") {
      return <p className="error_message">Введите корректный номер</p>;
    }
    return (
      <p className="form_text_validation">В формате +375 (xx) xxx-xx-xx</p>
    );
  };

  const checkEmailError = () => {
    if (errors.email) {
      return <p className="error_message">Введите корректный e-mail</p>;
    }
  };

  return (
    <>
      <p className="form_step">3 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <div className="input_wrapper">
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                validate: {
                  prefixError: (v) => checkPhonePrefix(v) !== "XX",
                  phoneError: (v) => !v.includes("x"),
                },
              }}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <MaskedInput
                  name={name}
                  mask={checkPhone}
                  value={value}
                  placeholder="Телефон"
                  placeholderChar="x"
                  guide={true}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          </div>

          {checkPhoneError()}

          <Input
            autocomplete="off"
            type="email"
            text="E-mail"
            id="email"
            {...register("email", { pattern: checkEmail, required: true })}
          />

          {checkEmailError()}

          <Button
            id="button-form-login"
            text="зарегистрироваться"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default ThirdStep;
