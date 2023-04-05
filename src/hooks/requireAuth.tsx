import { Navigate } from "react-router-dom";
import { CheckAuthProps } from "../types/interfaces";
import { useAppSelector } from "./reduxHooks";

const RequireAuth = ({ children }: CheckAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RequireAuth;
