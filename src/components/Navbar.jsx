import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
      <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li key={index} className="nav__item">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'nav__link active-nav' : 'nav__link'
                }
                onClick={() => setShowMenu(false)}
              >
                {icon}
                <span className="nav__name">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`nav__toggle ${showMenu ? "animate-toggle" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
