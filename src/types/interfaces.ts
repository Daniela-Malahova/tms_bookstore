export interface CheckAuthProps {
  children: JSX.Element;
}

export interface ButtonProps {
  id: string;
  disabled?: boolean;
  text: string;
  type: "submit" | "button";
  onClick?: (event: React.MouseEvent) => void;
}

export interface CheckboxProps {
  type: "checkbox";
  id: string;
  name: string;
  checked: boolean;
  onChecked: () => void;
}

export interface PropsSvg {
  id: string;
}

export interface AuthErrorProps {
  title: string;
  message: string;
  buttonTitle: string;
  buttonHandler?: () => void;
}

export interface PasswordFirstData {
  email: string;
}

export interface PasswordSecondData {
  password: string;
  confirmPassword: string;
}

export interface SignInSecondStepData {
  userName: string;
  lastName: string;
}

export interface SignInThirdStepData {
  phoneNumber: string;
  login: string;
}

export interface LoginCredsProps {
  email: string;
  password: string;
}

export interface SignInCredsProps extends LoginCredsProps {
  userName: string;
  lastName: string;
  phoneNumber: string;
  login: string;
}

export interface UserDataProps {
  formData: SignInCredsProps;
  setFormData: (e: any) => void;
}

export interface InitialStateUserSliceProps {
  email: string | null;
  token: string | null;
  id: string | null;
  error: boolean;
  isLoading: boolean;
  isAuth: boolean;
  isNewUserRegistred: boolean;
  isResetEmail: boolean;
  isChangedPassword: boolean;
}
