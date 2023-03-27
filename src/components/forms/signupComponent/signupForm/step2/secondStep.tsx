import { useForm } from "react-hook-form";
import Button from "../../../../common/button/button";
import Input from "../../../../common/input/input";
import { UserDataProps } from "../signupForm";

import "../signupForm.scss";

interface SecondStepData {
  userName: string;
  lastName: string;
}

const SecondStep = ({ formData, setFormData }: UserDataProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SecondStepData>({ mode: "onChange" });

  const formSubmitHandler = ({ userName, lastName }: SecondStepData) => {
    setFormData({ ...formData, userName, lastName });
  };

  return (
    <>
      <p className="form_step">2 шаг из 3</p>
      <div className="form_wrapper">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Input
            autocomplete="off"
            type="text"
            text="Имя"
            id="userName"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <p className="error_message">Поле не может быть пустым</p>
          )}
          <Input
            autocomplete="off"
            type="text"
            text="Фамилия"
            id="lastName"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <p className="error_message">Поле не может быть пустым</p>
          )}
          <Button id="button-form-login" text="последний шаг" type="submit" />
        </form>
      </div>
    </>
  );
};

export default SecondStep;
