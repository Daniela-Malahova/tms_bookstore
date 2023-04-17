import { NavLink } from "react-router-dom";
import { SvgCollection } from "../common/svg/svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer_content">
      <p className="footer_info">© 2022-2023 BookStore. Все права защищены.</p>
      <ul className="footer_social">
        <li>
          <NavLink to="https://www.facebook.com/">
            <SvgCollection id="Facebook" />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.instagram.com/">
            <SvgCollection id="Instagram" />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://vk.com/">
            <SvgCollection id="VK" />
          </NavLink>
        </li>
        <li className="svg_linked">
          <NavLink to="https://www.linkedin.com/">
            <SvgCollection id="LinkedIn" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
