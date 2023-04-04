import { Navigate } from "react-router-dom";
import { useAppSelector } from "./reduxHooks";

interface CheckAuthProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: CheckAuthProps) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default RequireAuth;
