import { NavLink } from "react-router-dom";
import { AccordionProps } from "../../types/interfaces";

import "./accordion.scss";

const Accordion: React.FC<AccordionProps> = ({ categories }) => {
  const categoriesItems = categories.map((category) => (
    <NavLink
      to={`books/${category.path}`}
      key={category.id}
      className={({ isActive }) => `${isActive ? "acor_all__books" : ""}`}
    >
      <p>{category.name}</p>
    </NavLink>
  ));

  return (
    <div className="acor-container">
      <input
        className="acor_input"
        type="checkbox"
        name="chacor"
        id="chacor1"
      />
      <label className="acor-content_label" htmlFor="chacor1">
        Витрина книг
      </label>
      <div className="acor-body">
        <NavLink
          to="books/all"
          className={({ isActive }) => `${isActive ? "acor_all__books" : ""}`}
        >
          <p>Все книги</p>
        </NavLink>
        {categoriesItems}
      </div>
      <NavLink to="/terms">
        <p className="acor-terms_of_use">Правила пользования</p>
      </NavLink>
    </div>
  );
};

export default Accordion;
