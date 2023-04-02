import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import Loader from "../loader/loader";
import "./authLayout.scss";

const AuthLayout = () => {
  const {isLoading} = useAppSelector(state => state.user)

  const loading = isLoading && <Loader/>

  return (
    <>
    {loading}
    <div className="form_background">
      <div className="content_wrapper">
        <h1>BookStore</h1>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default AuthLayout;
