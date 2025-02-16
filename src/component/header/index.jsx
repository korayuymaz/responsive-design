import { NavLink } from "react-router";
import "./style.scss";

const Header = () => {
  return (
    <nav className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header__link--active" : "header__link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/flex"
        className={({ isActive }) =>
          isActive ? "header__link--active" : "header__link"
        }
      >
        Flex
      </NavLink>
      <NavLink
        to="/grid"
        className={({ isActive }) =>
          isActive ? "header__link--active" : "header__link"
        }
      >
        Grid
      </NavLink>
    </nav>
  );
};

export default Header;
