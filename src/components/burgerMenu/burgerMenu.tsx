import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeUser } from "../../redux/slices/userSlice";
import Accordion from "../accordion/accordion";

import "./burgerMenu.scss";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const burgerMenuStylies = isMenuOpen ? "clicked" : "unclicked";
  const burgerMenuBackdrop = isMenuOpen ? "" : "hide";

  const burgerToggleHandler = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  const exitHandler = () => {
    dispatch(removeUser());
  };

  const clickHandler = (e: any) => {
    if (e.target.className === "burger_menu ") {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("click", clickHandler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("click", clickHandler);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="burger_btn--container">
        <button className="burger_btn" onClick={burgerToggleHandler}>
          <div className={`burger_line--first ${burgerMenuStylies}`}></div>
          <div className={`burger_line--second ${burgerMenuStylies}`}></div>
          <div className={`burger_line--third ${burgerMenuStylies}`}></div>
        </button>
      </div>

      <div className={`burger_menu ${burgerMenuBackdrop}`}>
        <div className="burger_background">
          <Accordion categories={categories} />
          <NavLink
            to="/auth"
            className="user_admin--data"
            onClick={exitHandler}
          >
            Выход
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
