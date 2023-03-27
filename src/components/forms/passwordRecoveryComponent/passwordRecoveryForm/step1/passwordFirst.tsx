import { useForm } from "react-hook-form";
import Input from "../../../../common/input/input";
import Button from "../../../../common/button/button";
import { checkEmail } from "../../../../../constants/regExp";

import ".././passwordRecoveryForm.scss";

interface PasswordFirstData {
  email: string;
}

const PasswordFirst = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordFirstData>({ mode: "onChange" });

  const formSubmitHandler = (data: PasswordFirstData) => {
    console.log(data);
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Input
          autocomplete="off"
          type="email"
          text="Email"
          id="email"
          {...register("email", { pattern: checkEmail, required: true })}
        />
        {errors.email ? (
          <p className="error_message">Введите корректный e-mail</p>
        ) : (
          <p className="form_text_validation">
            На это email будет отправлено письмо с инструкциями
            по восстановлению пароля
          </p>
        )}
        <Button id="button-form-login" text="восстановить" type="submit" />
      </form>
    </div>
  );
};

export default PasswordFirst;
