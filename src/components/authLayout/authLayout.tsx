import { Outlet } from "react-router-dom";
import "./authLayout.scss";

const AuthLayout = () => {
  return (
    <div className="form_background">
      <div className="content_wrapper">
        <h1>BookStore</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
