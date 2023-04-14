import { Navigate, useLocation } from "react-router-dom";
import { CheckAuthProps } from "../types/interfaces";
import { useAppSelector } from "./reduxHooks";

const UseAuth = ({ children }: CheckAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  if (isAuth) {
    return <Navigate to="/books/all" />;
  } else if (pathname === "/") {
    return <Navigate to="auth" />;
  }

  return children;
};

export default UseAuth;
