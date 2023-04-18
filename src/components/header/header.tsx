import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeUser } from "../../redux/slices/userSlice";

import BurgerMenu from "../burgerMenu/burgerMenu";
import "./header.scss";

const Header = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userName = localStorage.getItem("userName");

  const exitHandler = () => {
    dispatch(removeUser());
  };

  return (
    <div className="header_wrapper">
      <NavLink to="/books/all">
        <h1>BookStore</h1>
      </NavLink>
      <div className="user_content">
        <input
          className="user_content--checkbox"
          type="checkbox"
          id="user_content--checkbox"
          onChange={(e) => {
            setChecked(!checked);
          }}
        />
        <label className="user_content--label" htmlFor="user_content--checkbox">
          <p className="user_name">Привет, {userName}</p>
          <p className="user_avatar">
            <img src={require("../../assets/avatar.png")} alt="avatar" />
          </p>
        </label>
        {checked && (
          <div className="user_admin">
            <p className="user_admin--data" onClick={exitHandler}>
              Выход
            </p>
          </div>
        )}
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
