import Logo from "../Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Header.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";

export default function Header() {
  const [menuWindow, setMenuWindow] = useState(false);

  const authorization = false;

  const handleMenuOpen = () => {
    setMenuWindow(true);
  };

  const handleMenuClose = () => {
    setMenuWindow(false);
  };

  return (
    <header className={s.header}>
      <ul className={s.sectionHeader}>
        <li>
          <Logo style={"white"} />
        </li>
        <li className={s.nav}>
          <Nav />
        </li>

        <li className={s.boxUser}>
          {authorization ? <AuthNav /> : <UserNav />}
          <button
            className={s.menuButton}
            type="button"
            onClick={handleMenuOpen}
          >
            <svg className={s.iconMenu}>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        </li>
      </ul>
      {menuWindow && (
        <ul className={s.modalMenu}>
          <li>
            <button
              className={s.buttonClose}
              type="button"
              onClick={handleMenuClose}
            >
              <svg className={s.iconMenu}>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>
          </li>
          <li>
            <button className={s.btnLogOut} type="button">
              Log out
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
