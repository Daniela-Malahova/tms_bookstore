import { Navigate } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

interface CheckAuthProps {
  children: JSX.Element;
}

const UseAuth = ({ children }: CheckAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (isAuth) {
    return <Navigate to="/books" />;
  }

  return children;
};

export default UseAuth;
