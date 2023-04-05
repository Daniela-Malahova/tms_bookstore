import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import Input from "../../../../common/input/input";
import Button from "../../../../common/button/button";
import Checkbox from "../../../../common/checkbox/checkbox";
import { checkStringToLatinAndNum } from "../../../../../constants/regExp";
import { changePassword } from "../../../../../redux/slices/userSlice";
import { PasswordSecondData } from "../../../../../types/interfaces";

const PasswordSecond = () => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [checkboxCheckedFirst, setCheckboxCheckedFirst] =
    useState<boolean>(false);
  const [checkboxCheckedSecond, setCheckboxCheckedSecond] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PasswordSecondData>({ mode: "onBlur" });

  const formSubmitHandler = ({ password }: PasswordSecondData) => {
    dispatch(changePassword(password));
    reset();
  };

  const onCheckedFirst = () => {
    setCheckboxCheckedFirst((checkboxCheckedFirst) => !checkboxCheckedFirst);
  };

  const onCheckedSecond = () => {
    setCheckboxCheckedSecond((checkboxCheckedSecond) => !checkboxCheckedSecond);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Input
          autocomplete="off"
          type={checkboxCheckedFirst ? "text" : "password"}
          text="Новый пароль"
          id="newPassword"
          value={password}
          {...register("password", {
            pattern: checkStringToLatinAndNum,
            required: true,
            minLength: 8,
          })}
          onChange={(e) => setPassword(e.target.value)}
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
          value={newPassword}
          {...register("confirmPassword", {
            required: true,
            validate: {
              confirmError: (v, x) => v === x.password,
            },
          })}
          onChange={(e) => setNewPassword(e.target.value)}
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
