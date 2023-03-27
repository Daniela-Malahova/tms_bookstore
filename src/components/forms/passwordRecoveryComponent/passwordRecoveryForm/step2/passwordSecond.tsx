import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../../common/input/input";
import Button from "../../../../common/button/button";
import Checkbox from "../../../../common/checkbox/checkbox";
import { checkStringToLatinAndNum } from "../../../../../constants/regExp";

interface PasswordSecondData {
  password: string;
  confirmPassword: string;
}

const PasswordSecond = () => {
  const [checkboxCheckedFirst, setCheckboxCheckedFirst] =
    useState<boolean>(false);
  const [checkboxCheckedSecond, setCheckboxCheckedSecond] =
    useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordSecondData>({ mode: "onChange" });

  const formSubmitHandler = (data: PasswordSecondData) => {
    console.log(data);
  };

  const onCheckedFirst = () => {
    setCheckboxCheckedFirst((checkboxCheckedFirst) => !checkboxCheckedFirst);
  };

  const onCheckedSecond = () => {
    setCheckboxCheckedSecond((checkboxCheckedSecond) => !checkboxCheckedSecond);
  };

  console.log(errors);

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Input
          autocomplete="off"
          type={checkboxCheckedFirst ? "text" : "password"}
          text="Новый пароль"
          id="newPassword"
          {...register("password", {
            pattern: checkStringToLatinAndNum,
            required: true,
            minLength: 8,
          })}
        />
        <Checkbox
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={checkboxCheckedFirst}
          onChecked={onCheckedFirst}
        />
        <p
          className={errors.password ? "error_message" : "form_text_validation"}
        >
          Пароль не менее 8 символов, с заглавной буквой и цифрой
        </p>
        <Input
          autocomplete="off"
          type={checkboxCheckedSecond ? "text" : "password"}
          text="Повторите пароль"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            validate: {
              confirmError: (v, x) => v === x.password,
            },
          })}
        />

        {errors?.confirmPassword && (
          <p className="error_message_password">Пароли не совпадают</p>
        )}
        <Checkbox
          type="checkbox"
          id="checkbox"
          name="checkbox"
          checked={checkboxCheckedSecond}
          onChecked={onCheckedSecond}
        />
        <Button
          id="button-form-login"
          text="сохранить изменения"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PasswordSecond;
