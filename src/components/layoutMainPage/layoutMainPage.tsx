import { Outlet } from "react-router-dom";
import Accordion from "../accordion/accordion";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { getCategories } from "../../redux/slices/categoriesSlice";

import "./layoutMainPage.scss";

const LayoutMainPage = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="layout_main_content">
      <div className="layout_navigate_content">
        <Accordion categories={categories} />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutMainPage;
