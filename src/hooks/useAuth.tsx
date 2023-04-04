import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

interface CheckAuthProps {
  children: JSX.Element;
}

const UseAuth = ({ children }: CheckAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  if (isAuth) {
    return <Navigate to="/books" />;
  } else if (pathname === "/") {
    return <Navigate to="auth" />;
  }

  return children;
};

export default UseAuth;
