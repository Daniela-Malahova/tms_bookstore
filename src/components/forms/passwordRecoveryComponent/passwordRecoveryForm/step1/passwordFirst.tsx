import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  setError,
  setIsResetEmail,
  setIsStartLoaging,
  setIsStopLoaging,
} from "../../../../../redux/slices/userSlice";
import Input from "../../../../common/input/input";
import Button from "../../../../common/button/button";
import { checkEmail } from "../../../../../constants/regExp";

import ".././passwordRecoveryForm.scss";

interface PasswordFirstData {
  email: string;
}

const PasswordFirst = () => {
  const [email, setEmail] = useState<string>("");
  const dispatch = useAppDispatch();

  const resedEmailHandler = (email: string) => {
    const auth = getAuth();
    dispatch(setIsStartLoaging());
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(setIsResetEmail());
      })
      .catch(() => {
        dispatch(setError());
      })
      .finally(() => {
        dispatch(setIsStopLoaging());
      });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PasswordFirstData>({ mode: "onBlur" });

  const formSubmitHandler = ({ email }: PasswordFirstData) => {
    resedEmailHandler(email);
    reset();
  };

  const errorEmailMessage = errors.email ? (
    <p className="error_message">Введите корректный e-mail</p>
  ) : (
    <p className="form_text_validation">
      На это email будет отправлено письмо с инструкциями по восстановлению
      пароля
    </p>
  );

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Input
          autocomplete="off"
          type="email"
          text="Email"
          id="email"
          value={email}
          {...register("email", { pattern: checkEmail, required: true })}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errorEmailMessage}

        <Button id="button-form-login" text="восстановить" type="submit" />
      </form>
    </div>
  );
};

export default PasswordFirst;
