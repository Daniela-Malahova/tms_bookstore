import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import Footer from "../footer/footer";
import Header from "../header/header";
import Error from "../error/error";

import "./layout.scss";

const Layout = () => {
  const categories = useAppSelector((state) => state.categories);
  const books = useAppSelector((state) => state.books);
  const error = (categories.error || books.error) && <Error />;

  return (
    <>
      <div className="layout_header">
        <Header />
      </div>

      <div className="layout_content_wrapper">
        <div className="layout_app_container">
          {error}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
