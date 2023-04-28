import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { BreadCrumbsProps } from "../../types/interfaces";
import "./breadCrumbs.scss";

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ categoryPath, title }) => {
  const { categories } = useAppSelector((state) => state.categories);
  const selectedCategory = categories.find(
    (item) => item.path === categoryPath
  ) || { name: "Все книги", path: "all" };
  return (
    <div className="books_nav">
      <div className="books_nav_wrapper">
        <NavLink to={`../books/${categoryPath}`}>
          {selectedCategory?.name}
        </NavLink>
        <span className="separator">/</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default BreadCrumbs;
