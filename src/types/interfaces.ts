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
  category: string | undefined;
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

export interface ImagesProps {
  url: string;
}

export interface CommentUserProps {
  commentUserId: number | string;
  firstName: string | undefined;
  lastName: string | undefined;
  avatarUrl: string | null;
}

export interface CommentsProps {
  id: number | string;
  rating: number | null;
  text: string;
  createdAt: string;
  user: CommentUserProps;
}

export interface BookProps {
  id?: number;
  title: string;
  rating: number | null;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: Array<ImagesProps> | null;
  categories: string[];
  comments: Array<CommentsProps> | null;
}

export interface SliderProps {
  img: Array<ImagesProps>;
}

export interface BreadCrumbsProps {
  categoryPath: string;
  title: string;
}

export interface CommentsReviewProps {
  comments: Array<CommentsProps> | null;
  isAccordionOpen: boolean;
}

export interface BookReviewsProps {
  comments: Array<CommentsProps> | null;
}

export interface AddedCommentsProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}
