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
  userName: string | null;
  isLoading: boolean;
  isAuth: boolean;
  isNewUserRegistred: boolean;
  isResetEmail: boolean;
  isChangedPassword: boolean;
}

export interface CategoriesProps {
  id: number;
  name: string;
  path: string;
}

export interface ViewProps {
  viewType?: string;
}

export interface SearchProps extends ViewProps {
  search: string;
  setSearch: (str: string) => void;
  changeViewHandler: (view: string) => void;
}

export interface AccordionProps {
  categories: Array<CategoriesProps>;
}

export interface BookImgProps {
  url: string;
}

export interface BooksProps extends ViewProps {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: BookImgProps;
  categories: string[];
  id: number;
}

export interface RatingProps {
  rating: number;
}

export interface SearchNotificationProps {
  message: string;
}

export interface BooksPageProps { 
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
