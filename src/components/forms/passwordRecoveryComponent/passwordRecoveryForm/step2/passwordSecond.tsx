import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import Input from "../../../../common/input/input";
import Button from "../../../../common/button/button";
import Checkbox from "../../../../common/checkbox/checkbox";
import { checkStringToLatinAndNum } from "../../../../../constants/regExp";
import {
  setError,
  setIsChangePassword,
  setIsStartLoaging,
  setIsStopLoaging,
} from "../../../../../redux/slices/userSlice";

interface PasswordSecondData {
  password: string;
  confirmPassword: string;
}

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

  const changePasswordHandler = (password: string) => {
    const auth = getAuth();
    dispatch(setIsStartLoaging());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (auth.currentUser) {
          console.log(auth.currentUser);
          updatePassword(auth.currentUser, password)
            .then(() => {
              dispatch(setIsChangePassword());
            })
            .catch(() => {
              dispatch(setError());
            })
            .finally(() => {
              dispatch(setIsStopLoaging());
            });
        }
      }
    });
  };

  const formSubmitHandler = ({ password }: PasswordSecondData) => {
    changePasswordHandler(password);
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
